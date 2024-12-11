import { WindowProps } from "store/features/windowSlice";

declare global {
  interface HomeProps extends WindowProps {}
  interface HomeState {}
}

export {}
