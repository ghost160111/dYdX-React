import { PropsWithChildren } from "react";

declare global {
  interface MarkdownProps extends PropsWithChildren {}
  interface MarkdownState {}
}

export {}
