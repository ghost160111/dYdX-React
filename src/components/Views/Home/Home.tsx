import { PureComponent, ReactNode } from "react";
import styles from "./Home.module.scss";
import { connect } from "react-redux";
import windowMap from "store/mappers/window";

class Home extends PureComponent<HomeProps, HomeState> {
  get computedEscapeEvtState(): string {
    return this.props.isEscapeEvtEnabled ? "ACTIVE" : "INACTIVE";
  }

  get computedToggleBtnText(): string {
    return `Window Escape Event is ${this.computedEscapeEvtState}`;
  }

  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        <h1>Home component</h1>
        <button
          type="button"
          onClick={this.toggleEscapeEvt}
        >{this.computedToggleBtnText}</button>
      </div>
    );
  }

  toggleEscapeEvt = () => this.props.setEscapeEvt(!this.props.isEscapeEvtEnabled);
}

const UIHome = connect(
  windowMap.mapStateToProps,
  windowMap.mapDispatchProps
)(Home);

export default UIHome;
