"use client";

import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

export function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div role="status" aria-label="Demo site notice" className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600/90 to-amber-600/90 backdrop-blur-sm border-t border-orange-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-white/90 flex-1 text-center">
          <span className="font-semibold">Demo Site</span> - Built by{" "}
          <a
            href="https://mattyjacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 font-semibold hover:text-white transition-colors"
          >
            MattyJacks.com
          </a>
          {" "}- For demonstration purposes only. No warranties provided.{" "}
          <a
            href="mailto:Matt@MattyJacks.com"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            Matt@MattyJacks.com
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-white/60 hover:text-white transition-colors flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function DemoBadge() {
  return (
    <a
      href="https://mattyjacks.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-medium hover:bg-orange-500/15 transition-colors"
    >
      Demo by MattyJacks.com
      <ExternalLink className="h-2.5 w-2.5" />
    </a>
  );
}
