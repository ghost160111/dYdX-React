import { WindowProps } from "store/features/windowSlice";

declare global {
  interface ModalWindowProps extends WindowProps {}
  interface ModalWindowState {
    frameIsActive: boolean;
  }
}

export {}
