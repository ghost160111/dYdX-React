import { ReactNode } from "react";

declare global {
  interface MainProps extends HeaderRefProps {
    routes: ReactNode;
  }

  interface MainState {}
}

export {}
