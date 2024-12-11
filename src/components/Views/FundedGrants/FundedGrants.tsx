import { PureComponent, ReactNode } from "react";
import styles from "./FundedGrants.module.scss";

class FundedGrants extends PureComponent<FundedGrantsProps, FundedGrantsState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        FundedGrants component
      </div>
    );
  }
}

export default FundedGrants;