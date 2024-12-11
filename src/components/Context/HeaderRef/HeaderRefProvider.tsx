import { PropsWithChildren, PureComponent, ReactNode, RefObject } from "react";
import { HeaderRefContext } from "../ContextCollection";

class HeaderRefProvider extends PureComponent<PropsWithChildren, HeaderRefState> {
  state: Readonly<HeaderRefState> = {
    headerRef: null,
  };

  render(): ReactNode {
    return (
      <HeaderRefContext.Provider
        value={{
          ...this.state,
          setHeaderRef: this.setHeaderRef,
          removeHeaderRef: this.removeHeaderRef
        }}
      >
        {this.props.children}
      </HeaderRefContext.Provider>
    );
  }

  setHeaderRef = (ref: RefObject<HTMLElement>): void => {
    this.setState({ headerRef: ref });
  }

  removeHeaderRef = (): void => {
    this.setState({ headerRef: null });
  }
}

export default HeaderRefProvider;
