import IReactService from "services/classes/IReactService";
import InternetState from "./InternetState";
import styles from "./InternetState.module.scss";

export class InternetStateComputed<CTX extends InternetState> extends IReactService<InternetStateProps, InternetStateState, CTX> {
  get onlineStatus(): string {
    return this.state.isOnline ? ":)" : ":(";
  }

  get onlineState(): string {
    return this.state.isOnline ? "Back with internet." : "Oops, no internet!";
  }

  get onlineStateClassName(): string {
    return this.state.isOnline
      ? styles["internet-state"]
      : `${styles["internet-state"]} ${styles["internet-state--active"]}`;
  }

  get eventOptions(): AddEventListenerOptions {
    return { signal: this.ctx.controller.signal };
  }
}

export class InternetStateMethods<CTX extends InternetState> extends IReactService<InternetStateProps, InternetStateState, CTX> {
  setLine(value: boolean): void {
    this.ctx.setState({ isOnline: value });
  }

  onLine = (): void => {
    this.setLine(true);
  }

  offLine = (): void => {
    this.setLine(false);
  }
}
