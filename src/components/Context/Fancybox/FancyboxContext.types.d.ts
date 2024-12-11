declare global {
  interface FancyboxState {
    fancyboxIsActive: boolean;
  }

  interface FancyboxActions {
    setFancyboxAttachStatus: (value: booleans) => void;
  }

  interface FancyboxProps extends FancyboxState, FancyboxActions {}
}

export {}
