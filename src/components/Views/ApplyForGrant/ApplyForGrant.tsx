import { PureComponent, ReactNode } from "react";
import styles from "./ApplyForGrant.module.scss";

class ApplyForGrant extends PureComponent<ApplyForGrantProps, ApplyForGrantState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        ApplyForGrant component
      </div>
    );
  }
}

export default ApplyForGrant;