import HeaderElement from "./HeaderElement";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "header-element": React.DetailedHTMLProps<React.HTMLAttributes<HeaderElement>, HeaderElement>;
    }
  }
}

export {}
