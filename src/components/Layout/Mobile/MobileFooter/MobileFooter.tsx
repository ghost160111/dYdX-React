import { PureComponent, ReactNode } from "react";
import styles from "./MobileFooter.module.scss";

class MobileFooter extends PureComponent<MobileFooterProps, MobileFooterState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        MobileFooter component
      </div>
    );
  }
}

export default MobileFooter;