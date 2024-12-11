import { PureComponent, ReactNode } from "react";
import styles from "./MessagePopup.module.scss";

class MessagePopup extends PureComponent<MessagePopupProps, MessagePopupState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        MessagePopup component
      </div>
    );
  }
}

export default MessagePopup;