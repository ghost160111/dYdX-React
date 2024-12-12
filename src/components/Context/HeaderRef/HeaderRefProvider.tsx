import { PropsWithChildren, PureComponent, ReactNode, RefObject } from "react";
import { HeaderRefContext } from "../ContextCollection";

class HeaderRefProvider extends PureComponent<PropsWithChildren, HeaderRefState> {
  state: Readonly<HeaderRefState> = {
    headerRef: null,
    headerIsActive: null,
  };

  render(): ReactNode {
    return (
      <HeaderRefContext.Provider
        value={{
          ...this.state,
          setHeaderRef: this.setHeaderRef,
          removeHeaderRef: this.removeHeaderRef,
          setHeaderBgState: this.setHeaderBgState,
        }}
      >
        {this.props.children}
      </HeaderRefContext.Provider>
    );
  }

  setHeaderRef = (ref: RefObject<HTMLElement>): void => {
    this.setState(prevState => ({ ...prevState, headerRef: ref }));
  }

  removeHeaderRef = (): void => {
    this.setState(prevState => ({ ...prevState, headerRef: null }));
  }

  setHeaderBgState = (state: boolean): void => {
    this.setState(prevState => ({
      ...prevState,
      headerIsActive: state,
    }));
  }
}

export default HeaderRefProvider;
