import { RefObject } from "react"

declare global {
  interface HeaderRefState {
    headerRef: RefObject<HTMLElement>;
    headerIsActive: boolean;
  }

  interface HeaderRefActions {
    setHeaderRef: (ref: RefObject<HTMLElement>) => void;
    removeHeaderRef: () => void;
    setHeaderBgState: (state: boolean) => void;
  }

  interface HeaderRefProps extends HeaderRefState, HeaderRefActions {}
}

export {}
