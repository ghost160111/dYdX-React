import { ErrorInfo, PureComponent, ReactNode } from "react";
import { logErrorGrouped } from "./ErrorBoundary.utils";
import { ERROR_BOUNDARY_DEFAULT_STATE } from "./ErrorBoundary.constants";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state: Readonly<ErrorBoundaryState> = {
    ...ERROR_BOUNDARY_DEFAULT_STATE,
  };

  get defaultTemplate(): ReactNode {
    return (
      <div className={styles["default-container"]}>
        <span>Error name: {this.state.error.name}</span>
        <span>Error message: {this.state.error.message}</span>
        <span>Error stack: {this.state.error.stack}</span>
      </div>
    );
  }

  get errorTemplate(): ReactNode {
    return this.props.fallback ?? this.defaultTemplate;
  }

  get errorBoundary(): ReactNode {
    return this.state.hasError
      ? this.errorTemplate
      : this.props.children;
  }

  render(): ReactNode {
    return this.errorBoundary;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo, hasError: true });
    logErrorGrouped(error, errorInfo);
  }
}

export default ErrorBoundary;
