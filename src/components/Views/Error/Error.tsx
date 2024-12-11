import { PureComponent, ReactNode } from "react";
import styles from "./Error.module.scss";

class ErrorView extends PureComponent<ErrorProps, ErrorState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        Error component
      </div>
    );
  }
}

export default ErrorView;
