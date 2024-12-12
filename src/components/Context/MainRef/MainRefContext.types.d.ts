import { RefObject } from "react";

declare global {
  interface MainRefState {
    mainRef: RefObject<HTMLElement>;
  }

  interface MainRefActions {
    setMainRef: (ref: RefObject<HTMLElement>) => void;
  }

  interface MainRefProps extends MainRefState, MainRefActions {}
}

export {}
