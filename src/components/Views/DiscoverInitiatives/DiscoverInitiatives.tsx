import { PureComponent, ReactNode } from "react";
import styles from "./DiscoverInitiatives.module.scss";

class DiscoverInitiatives extends PureComponent<DiscoverInitiativesProps, DiscoverInitiativesState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        DiscoverInitiatives component
      </div>
    );
  }
}

export default DiscoverInitiatives;