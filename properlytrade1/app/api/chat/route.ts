import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const MAX_MESSAGE_LENGTH = 4000;
const MAX_MESSAGES = 50;
const VALID_PROVIDERS = ["openai", "openrouter"] as const;
type Provider = (typeof VALID_PROVIDERS)[number];

const SYSTEM_PROMPT = `You are ProperlyTrade AI, an experimental trading assistant. You help users analyze markets, discuss trading strategies, review chart patterns, and think through trade setups.

IMPORTANT RULES:
- You do NOT provide financial advice. Everything you say is for educational and experimental purposes only.
- Always remind users that trading involves significant risk of loss.
- You can discuss technical analysis, fundamental analysis, risk management, position sizing, and trading psychology.
- You can analyze specific tickers, pairs, or assets when asked.
- Be direct, data-driven, and concise in your responses.
- If asked about specific entry/exit points, frame them as "areas of interest" not recommendations.
- You support Forex, Futures, Crypto, Equities, and Options discussions.
- Format responses with clear structure using markdown when helpful.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      messages,
      provider = "openai",
      userOpenAIKey,
      userOpenRouterKey,
    } = body;

    // Validate provider
    if (!VALID_PROVIDERS.includes(provider as Provider)) {
      return NextResponse.json(
        { error: "Invalid provider. Must be 'openai' or 'openrouter'." },
        { status: 400 }
      );
    }

    // Validate messages array
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Limit message count to prevent abuse
    if (messages.length > MAX_MESSAGES) {
      return NextResponse.json(
        { error: `Too many messages. Maximum ${MAX_MESSAGES} allowed per request.` },
        { status: 400 }
      );
    }

    // Validate and sanitize each message
    for (const msg of messages) {
      if (!msg.role || !msg.content || typeof msg.content !== "string") {
        return NextResponse.json(
          { error: "Each message must have a valid role and content string." },
          { status: 400 }
        );
      }
      if (msg.content.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          { error: `Message too long. Maximum ${MAX_MESSAGE_LENGTH} characters.` },
          { status: 400 }
        );
      }
      if (!['user', 'assistant'].includes(msg.role)) {
        return NextResponse.json(
          { error: "Invalid message role. Must be 'user' or 'assistant'." },
          { status: 400 }
        );
      }
    }

    const fullMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...messages,
    ];

    let responseText: string;

    if (provider === "openrouter") {
      const apiKey =
        userOpenRouterKey || process.env.OPENROUTER_API_KEY;

      if (!apiKey) {
        return NextResponse.json(
          { error: "OpenRouter API key is not configured. Please provide your own API key or contact support." },
          { status: 401 }
        );
      }

      const orResponse = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://properlytrade.com",
            "X-Title": "ProperlyTrade AI",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o",
            messages: fullMessages,
            max_tokens: 2048,
            temperature: 0.7,
          }),
        }
      );

      if (!orResponse.ok) {
        const errorData = await orResponse.json().catch(() => ({}));
        return NextResponse.json(
          {
            error:
              errorData?.error?.message ||
              `OpenRouter API error: ${orResponse.status}`,
          },
          { status: orResponse.status }
        );
      }

      const orData = await orResponse.json();
      responseText =
        orData.choices?.[0]?.message?.content || "No response generated.";
    } else {
      // Default: OpenAI
      const apiKey = userOpenAIKey || process.env.OPENAI_API_KEY;

      if (!apiKey) {
        return NextResponse.json(
          { error: "OpenAI API key is not configured. Please provide your own API key or contact support." },
          { status: 401 }
        );
      }

      const openai = new OpenAI({ apiKey });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: fullMessages,
        max_tokens: 2048,
        temperature: 0.7,
      });

      responseText =
        completion.choices[0]?.message?.content || "No response generated.";
    }

    return NextResponse.json({ message: responseText });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    const message =
      error instanceof Error ? error.message : "Internal server error";

    // Don't leak internal error details to client
    const safeMessage = message.includes("API")
      ? message
      : "An unexpected error occurred. Please try again.";

    return NextResponse.json({ error: safeMessage }, { status: 500 });
  }
}
