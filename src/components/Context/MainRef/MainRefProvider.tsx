import { PropsWithChildren, PureComponent, ReactNode, RefObject } from "react";
import { MainRefContext } from "../ContextCollection";

class MainRefProvider extends PureComponent<PropsWithChildren, MainRefState> {
  state: Readonly<MainRefState> = {
    mainRef: null,
  };

  render(): ReactNode {
    return (
      <MainRefContext.Provider
        value={{
          ...this.state,
          setMainRef: this.setMainRef,
        }}
      >
        {this.props.children}
      </MainRefContext.Provider>
    );
  }

  setMainRef = (ref: RefObject<HTMLElement>): void => {
    this.setState({ mainRef: ref });
  }
}

export default MainRefProvider;
