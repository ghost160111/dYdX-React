import { ErrorInfo, PropsWithChildren, ReactNode } from "react";

declare global {
  interface ErrorBoundaryProps extends PropsWithChildren {
    fallback?: ReactNode;
  }

  interface ErrorBoundaryState {
    error: Error;
    errorInfo: ErrorInfo;
    hasError: boolean;
  }
}

export {}
