import { RefObject } from "react"

declare global {
  interface HeaderRefState {
    headerRef: RefObject<HTMLElement>;
  }

  interface HeaderRefActions {
    setHeaderRef: (ref: RefObject<HTMLElement>) => void;
    removeHeaderRef: () => void;
  }

  interface HeaderRefProps extends HeaderRefState, HeaderRefActions {}
}

export {}
