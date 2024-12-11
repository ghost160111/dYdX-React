import { PureComponent, ReactNode } from "react";

class SVG_Loupe extends PureComponent {
  render(): ReactNode {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.0595"
          cy="11.0585"
          r="7.06194"
          stroke="#A6A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0034 20.0034L16.0518 16.0518"
          stroke="#A6A6A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default SVG_Loupe;
