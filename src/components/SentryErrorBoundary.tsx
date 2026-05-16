"use client";

import * as Sentry from "@sentry/react";
import ErrorBoundary from "@/components/ErrorBoundary";

// Wrap the existing ErrorBoundary with Sentry's error boundary
export const SentryErrorBoundary = Sentry.withErrorBoundary(ErrorBoundary, {
  fallback: (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <p className="text-foreground/60 text-sm mb-4">
          Something went wrong. Our team has been notified.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-xs font-medium bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  ),
  showDialog: true,
});
