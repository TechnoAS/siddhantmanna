"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import * as Sentry from "@sentry/react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    errorMessage?: string;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log to console in development
        console.error("ErrorBoundary caught:", error, errorInfo);

        // Send to Sentry in production
        if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
            Sentry.captureException(error, {
                contexts: {
                    react: {
                        componentStack: errorInfo.componentStack,
                    },
                },
            });
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex items-center justify-center py-20 px-4">
                        <div className="text-center max-w-md">
                            <p className="text-foreground/60 text-sm mb-4">
                                Something went wrong loading this section.
                            </p>
                            {process.env.NODE_ENV === "development" && this.state.errorMessage && (
                                <p className="text-xs text-destructive/60 mb-4 font-mono wrap-break-word">
                                    {this.state.errorMessage}
                                </p>
                            )}
                            <button
                                onClick={() => this.setState({ hasError: false })}
                                className="px-4 py-2 text-xs font-medium bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
                            >
                                Try again
                            </button>
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
