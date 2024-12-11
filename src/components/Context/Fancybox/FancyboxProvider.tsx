import { PropsWithChildren, PureComponent, ReactNode } from "react";
import { FancyboxContext } from "../ContextCollection";

class FancyboxProvider extends PureComponent<PropsWithChildren, FancyboxState> {
  state: Readonly<FancyboxState> = {
    fancyboxIsActive: false,
  };

  render(): ReactNode {
    return (
      <FancyboxContext.Provider
        value={{
          ...this.state,
          setFancyboxAttachStatus: this.setFancyboxAttachStatus,
        }}
      >
        {this.props.children}
      </FancyboxContext.Provider>
    );
  }

  setFancyboxAttachStatus = (value: boolean): void => {
    this.setState({ fancyboxIsActive: value });
  }
}

export default FancyboxProvider;
