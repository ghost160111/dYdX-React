import AppElement from "./AppElement";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "app-element": React.DetailedHTMLProps<React.HTMLAttributes<AppElement>, AppElement>;
    }
  }
}

export {}
