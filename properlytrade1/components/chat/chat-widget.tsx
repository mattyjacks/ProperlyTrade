"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  User,
  AlertTriangle,
  Loader2,
  Coins,
  Sparkles,
} from "lucide-react";
import {
  loadCredits,
  useCredit,
  getOverageCost,
  CreditState,
  CREDIT_CONSTANTS,
} from "@/lib/credits";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isOverage?: boolean;
}

interface ChatWidgetProps {
  provider: "openai" | "openrouter";
  userOpenAIKey?: string;
  userOpenRouterKey?: string;
}

export function ChatWidget({
  provider,
  userOpenAIKey,
  userOpenRouterKey,
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState<CreditState | null>(null);
  const [showOverageWarning, setShowOverageWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCredits(loadCredits());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || !credits) return;

    // Check credits
    const { newState, allowed, isOverage } = useCredit(credits);
    if (!allowed) return;

    if (isOverage && !showOverageWarning) {
      setShowOverageWarning(true);
      setCredits(newState);
      return;
    }

    setCredits(newState);
    setShowOverageWarning(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          provider,
          userOpenAIKey: userOpenAIKey || undefined,
          userOpenRouterKey: userOpenRouterKey || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        isOverage,
      };

      setMessages([...newMessages, assistantMessage]);
    } catch (error: unknown) {
      const errorMsg =
        error instanceof Error ? error.message : "Something went wrong";
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Error: ${errorMsg}. Please check your API key configuration and try again.`,
      };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [
    input,
    isLoading,
    credits,
    messages,
    provider,
    userOpenAIKey,
    userOpenRouterKey,
    showOverageWarning,
  ]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const hasOwnKey = !!(userOpenAIKey || userOpenRouterKey);
  const dailyCreditsExact = hasOwnKey
    ? CREDIT_CONSTANTS.FREE_CREDITS_PER_DAY * CREDIT_CONSTANTS.BYOK_MULTIPLIER
    : CREDIT_CONSTANTS.FREE_CREDITS_PER_DAY;
  const dailyCreditsInt = Math.floor(dailyCreditsExact);

  return (
    <div className="flex flex-col h-full">
      {/* Credit bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Coins className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              {credits?.balance ?? 0} credits
            </span>
          </div>
          {hasOwnKey && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
              πx BYOK
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-white/30">
          <span
            title={hasOwnKey ? `+${dailyCreditsExact}/day (\u03C0 \u00D7 ${CREDIT_CONSTANTS.FREE_CREDITS_PER_DAY})` : undefined}
            className={hasOwnKey ? "cursor-help border-b border-dotted border-white/10" : ""}
          >+{dailyCreditsInt}/day</span>
          {credits && credits.overageCreditsUsed > 0 && (
            <span className="text-orange-400">
              Overage: {credits.overageCreditsUsed} ($
              {getOverageCost(credits.overageCreditsUsed).toFixed(2)})
            </span>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              ProperlyTrade AI
            </h3>
            <p className="text-sm text-white/40 max-w-md mb-6">
              Ask me about market analysis, trading strategies, chart patterns,
              risk management, or any trading topic. I support Forex, Futures,
              Crypto, Equities, and Options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
              {[
                "Analyze EUR/USD for a swing trade setup",
                "What's a good risk management strategy for a $10K account?",
                "Explain the golden cross pattern",
                "Compare scalping vs day trading pros and cons",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setInput(suggestion);
                    inputRef.current?.focus();
                  }}
                  className="text-left text-xs text-white/40 hover:text-white/60 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.role === "assistant" && (
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="h-4 w-4 text-blue-400" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-blue-600/20 border border-blue-500/20 text-white"
                  : "bg-white/[0.03] border border-white/[0.06] text-white/80"
              }`}
            >
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </div>
              {message.isOverage && (
                <p className="text-[10px] text-orange-400 mt-2">
                  Overage credit used ($
                  {CREDIT_CONSTANTS.OVERAGE_COST_PER_CREDIT})
                </p>
              )}
            </div>
            {message.role === "user" && (
              <div className="h-8 w-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-1">
                <User className="h-4 w-4 text-white/50" />
              </div>
            )}
          </motion.div>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-blue-400" />
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl px-4 py-3">
              <Loader2 className="h-4 w-4 text-blue-400 animate-spin" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Overage warning */}
      <AnimatePresence>
        {showOverageWarning && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 py-3 bg-orange-500/10 border-t border-orange-500/20"
          >
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-orange-400">
                  You&apos;ve used all your free credits. Continuing will use
                  overage credits at $
                  {CREDIT_CONSTANTS.OVERAGE_COST_PER_CREDIT}/prompt. Press send
                  again to confirm.
                </p>
              </div>
              <button
                onClick={() => setShowOverageWarning(false)}
                className="text-xs text-orange-400/60 hover:text-orange-400"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading announcement for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isLoading ? "AI is generating a response..." : ""}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-white/[0.06]">
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about trading strategies, market analysis, risk management..."
            rows={1}
            maxLength={4000}
            aria-label="Chat message input"
            className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm resize-none"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-white/[0.04] disabled:text-white/20 text-white transition-all flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        {input.length > 3000 && (
          <p className={`text-[10px] mt-1 text-right ${input.length > 3800 ? "text-red-400" : "text-white/30"}`}>
            {input.length}/4000
          </p>
        )}
      </div>
    </div>
  );
}
