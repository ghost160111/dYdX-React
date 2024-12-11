import { ButtonHTMLAttributes, PropsWithChildren } from "react"

declare global {
  interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}
  interface ButtonState {}
}

export {}
