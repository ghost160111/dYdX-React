import { PureComponent, ReactNode } from "react";
import styles from "./InternetState.module.scss";

class InternetState extends PureComponent<InternetStateProps> {
  get computedOnlineStatus(): string {
    return this.props.isOnline ? ":)" : ":(";
  }

  get computedOnlineState(): string {
    return this.props.isOnline ? "Back with internet." : "Oops, no internet!";
  }

  get computedOnlineStateClassName(): string {
    return this.props.isOnline
      ? styles["internet-state"]
      : `${styles["internet-state"]} ${styles["internet-state--active"]}`;
  }

  render(): ReactNode {
    return (
      <div className={this.computedOnlineStateClassName}>
        <h1>Internet Status {this.computedOnlineStatus}</h1>
        <p>{this.computedOnlineState}</p>
      </div>
    );
  }
}

export default InternetState;
