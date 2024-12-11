import { PureComponent, ReactNode } from "react";

export interface SVG_AccessibilityProps {
  isActive: boolean;
}

class SVG_Accessibility extends PureComponent<SVG_AccessibilityProps> {
  render(): ReactNode {
    return (
      <svg
        className={this.props.isActive ? "svg-settings active" : "svg-settings"}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0003 18.6674C10.9027 16.8889 7.09368 16.8889 3.99609 18.6674"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.6655 7.19898L9.47007 6.80048C8.75352 6.56163 7.9693 6.63772 7.31203 7.00986C6.65476 7.382 6.18604 8.01532 6.02219 8.75264L4.12315 17.2983C4.0387 17.6784 3.99609 18.0665 3.99609 18.4558V21.3353C3.99609 23.5454 5.7877 25.337 7.99776 25.337H9.71181C11.7677 25.337 13.489 23.7792 13.6936 21.7335L14.0003 18.6675"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.3367 7.19898L22.5321 6.80048C23.2487 6.56163 24.0329 6.63772 24.6902 7.00986C25.3475 7.382 25.8162 8.01532 25.98 8.75264L27.8791 17.2983C27.9635 17.6784 28.0061 18.0665 28.0061 18.4558V21.3353C28.0061 23.5454 26.2145 25.337 24.0045 25.337H22.2904C20.2345 25.337 18.5132 23.7792 18.3086 21.7335L18.002 18.6675"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 18.6674C15.1856 17.7781 16.816 17.7781 18.0016 18.6674"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M28.0061 18.6674C24.9085 16.8889 21.0995 16.8889 18.002 18.6674"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
}

export default SVG_Accessibility;
