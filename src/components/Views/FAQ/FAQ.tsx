import { PureComponent, ReactNode } from "react";
import styles from "./FAQ.module.scss";

class FAQ extends PureComponent<FAQProps, FAQState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        FAQ component
      </div>
    );
  }
}

export default FAQ;