"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">
          Something went wrong
        </h1>
        <p className="text-white/50 mb-2 leading-relaxed">
          An unexpected error occurred. This is a demo site and errors may
          happen.
        </p>
        {error.digest && (
          <p className="text-xs text-white/25 mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] rounded-xl transition-all duration-300"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <p className="mt-12 text-[10px] text-white/20">
          Demo site by{" "}
          <a
            href="https://mattyjacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/30"
          >
            MattyJacks.com
          </a>
          {" "}- No warranties provided. Contact:{" "}
          <a
            href="mailto:Matt@MattyJacks.com"
            className="underline hover:text-white/30"
          >
            Matt@MattyJacks.com
          </a>
        </p>
      </div>
    </main>
  );
}
