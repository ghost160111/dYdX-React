import { MobileMenuReduxProps } from "store/features/mobileMenuSlice";

declare global {
  interface BurgerProps extends MobileMenuReduxProps {}
  interface BurgerState {}
}

export {}
