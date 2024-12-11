import { PureComponent, ReactNode } from "react";

class SVG_BackButton extends PureComponent {
  render(): ReactNode {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="23.5" stroke="#565656" />
        <path d="M26.3333 19L21 24.3333L26.3333 29.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
}

export default SVG_BackButton;
