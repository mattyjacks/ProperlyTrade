"use client";

import { useState } from "react";
import { Key, Eye, EyeOff, Check, X } from "lucide-react";

interface ApiKeySettingsProps {
  provider: "openai" | "openrouter";
  onProviderChange: (provider: "openai" | "openrouter") => void;
  openaiKey: string;
  onOpenaiKeyChange: (key: string) => void;
  openrouterKey: string;
  onOpenrouterKeyChange: (key: string) => void;
}

export function ApiKeySettings({
  provider,
  onProviderChange,
  openaiKey,
  onOpenaiKeyChange,
  openrouterKey,
  onOpenrouterKeyChange,
}: ApiKeySettingsProps) {
  const [showOpenAIKey, setShowOpenAIKey] = useState(false);
  const [showOpenRouterKey, setShowOpenRouterKey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const hasAnyKey = !!(openaiKey || openrouterKey);

  return (
    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Key className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">API Key Settings</p>
            <p className="text-xs text-white/30">
              {hasAnyKey
                ? "Own key active - \u03C0x daily credits"
                : "Add your key for \u03C0x credits"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {hasAnyKey && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
              Active
            </span>
          )}
          <svg
            className={`h-4 w-4 text-white/30 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 space-y-4 border-t border-white/[0.04] pt-4">
          {/* Provider toggle */}
          <div>
            <label className="block text-xs text-white/40 mb-2">
              AI Provider
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => onProviderChange("openai")}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  provider === "openai"
                    ? "bg-blue-600/20 border border-blue-500/30 text-blue-400"
                    : "bg-white/[0.02] border border-white/[0.06] text-white/40 hover:text-white/60"
                }`}
              >
                OpenAI
              </button>
              <button
                onClick={() => onProviderChange("openrouter")}
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  provider === "openrouter"
                    ? "bg-blue-600/20 border border-blue-500/30 text-blue-400"
                    : "bg-white/[0.02] border border-white/[0.06] text-white/40 hover:text-white/60"
                }`}
              >
                OpenRouter
              </button>
            </div>
          </div>

          {/* OpenAI Key */}
          <div>
            <label className="block text-xs text-white/40 mb-2">
              OpenAI API Key{" "}
              <span className="text-white/20">(optional)</span>
            </label>
            <div className="relative">
              <input
                type={showOpenAIKey ? "text" : "password"}
                value={openaiKey}
                onChange={(e) => onOpenaiKeyChange(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-2.5 pr-20 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/15 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm font-mono"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {openaiKey && (
                  <button
                    onClick={() => onOpenaiKeyChange("")}
                    className="p-1 text-white/20 hover:text-red-400 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setShowOpenAIKey(!showOpenAIKey)}
                  className="p-1 text-white/20 hover:text-white/40 transition-colors"
                >
                  {showOpenAIKey ? (
                    <EyeOff className="h-3.5 w-3.5" />
                  ) : (
                    <Eye className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* OpenRouter Key */}
          <div>
            <label className="block text-xs text-white/40 mb-2">
              OpenRouter API Key{" "}
              <span className="text-white/20">(optional)</span>
            </label>
            <div className="relative">
              <input
                type={showOpenRouterKey ? "text" : "password"}
                value={openrouterKey}
                onChange={(e) => onOpenrouterKeyChange(e.target.value)}
                placeholder="sk-or-..."
                className="w-full px-4 py-2.5 pr-20 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/15 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm font-mono"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {openrouterKey && (
                  <button
                    onClick={() => onOpenrouterKeyChange("")}
                    className="p-1 text-white/20 hover:text-red-400 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setShowOpenRouterKey(!showOpenRouterKey)}
                  className="p-1 text-white/20 hover:text-white/40 transition-colors"
                >
                  {showOpenRouterKey ? (
                    <EyeOff className="h-3.5 w-3.5" />
                  ) : (
                    <Eye className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Benefits callout */}
          <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
            <p className="text-xs text-emerald-400/80 font-medium mb-1.5">
              Benefits of using your own key:
            </p>
            <ul className="space-y-1">
              {[
                "~31 free credits/day (\u03C0 \u00D7 10)",
                "~314 max accumulated credits (\u03C0 \u00D7 100)",
                "Lower overage costs",
                "Direct API access for faster responses",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-[11px] text-emerald-400/60"
                >
                  <Check className="h-3 w-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[10px] text-white/20 leading-relaxed">
            Your API keys are stored locally in your browser and sent directly
            to the respective API. They are never stored on our servers.
          </p>
        </div>
      )}
    </div>
  );
}
