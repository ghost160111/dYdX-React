import { MouseEvent } from "react";

declare global {
  interface CheckboxProps extends ClassNameExtenderProps {
    isChecked?: boolean;
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
    id?: string;
    title?: string;
  }
}

export {}
