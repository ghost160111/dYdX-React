import { ReactNode } from "react";

declare global {
  interface MainProps extends HeaderRefProps, MainRefProps {
    routes: ReactNode;
  }

  interface MainState {}
}

export {}
