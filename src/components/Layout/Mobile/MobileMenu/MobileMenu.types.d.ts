import { WithTranslation } from "react-i18next";
import { MobileMenuReduxProps } from "store/features/mobileMenuSlice";

declare global {
  interface MobileMenuProps extends MobileMenuReduxProps, WithTranslation {}
  interface MobileMenuState {}
}

export {}
