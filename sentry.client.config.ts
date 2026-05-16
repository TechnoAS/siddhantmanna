import * as Sentry from "@sentry/react";

export function initSentry() {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
    // We recommend adjusting this value in production
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
    
    // Capture Replay for 10% of all sessions plus 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // Additional configuration
    integrations: [
      Sentry.replayIntegration(),
      Sentry.feedbackIntegration({
        colorScheme: "dark",
        triggerLabel: "Report Bug",
      }),
    ],
  });
}
