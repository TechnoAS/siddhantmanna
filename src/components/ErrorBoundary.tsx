"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex items-center justify-center py-20 px-4">
                        <div className="text-center max-w-md">
                            <p className="text-foreground/60 text-sm">
                                Something went wrong loading this section.
                            </p>
                            <button
                                onClick={() => this.setState({ hasError: false })}
                                className="mt-4 px-4 py-2 text-xs font-medium bg-muted border border-border rounded-lg hover:bg-muted/80 transition-colors"
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
