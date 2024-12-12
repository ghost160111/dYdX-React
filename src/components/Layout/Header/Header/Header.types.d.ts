import { WithTranslation } from "react-i18next";
import { WindowProps } from "store/features/windowSlice";

declare global {
  interface HeaderProps extends WithTranslation, WindowProps, HeaderRefProps {}
  interface HeaderState {
    headerIsActive: boolean;
  }
}

export {}
