import { PureComponent, ReactNode } from "react";
import SpinnerLoader from "./SpinnerLoader";
import "./SpinnerLoaderWrapper.scss";

export interface SpinnerLoaderWrapperProps {
  destroy?: boolean;
  fixedPosition?: boolean;
}

class SpinnerLoaderWrapper extends PureComponent<SpinnerLoaderWrapperProps> {
  get computedSpinnerLoaderWrapperClassName(): string {
    if (this.props.fixedPosition) {
      return this.props.destroy
        ? "spinner-loader-wrapper spinner-loader-wrapper--fixed spinner-loader-wrapper--destroyed"
        : "spinner-loader-wrapper spinner-loader-wrapper--fixed";
    }

    return this.props.destroy
      ? "spinner-loader-wrapper spinner-loader-wrapper--destroyed"
      : "spinner-loader-wrapper";
  }

  render(): ReactNode {
    return (
      <div className={this.computedSpinnerLoaderWrapperClassName}>
        <SpinnerLoader />
      </div>
    );
  }
}

export default SpinnerLoaderWrapper;
