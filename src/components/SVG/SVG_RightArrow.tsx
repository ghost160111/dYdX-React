import { PureComponent, ReactNode } from "react";

class SVG_RightArrow extends PureComponent<SVG_LeftRightArrowTypes> {
  render(): ReactNode {
    return (
      <svg
        className="right-arrow-svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={this.props.fill ?? "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrow"
          d="M8.33334 15.8336C8.13863 15.834 7.94993 15.7662 7.8 15.6419C7.62958 15.5007 7.52238 15.2974 7.50206 15.0769C7.48173 14.8565 7.54996 14.637 7.69167 14.4669L11.425 10.0003L7.825 5.52528C7.6852 5.35312 7.61978 5.13233 7.64324 4.91179C7.6667 4.69126 7.7771 4.48917 7.95 4.35028C8.12431 4.19691 8.35469 4.12322 8.58565 4.14695C8.81661 4.17067 9.02719 4.28968 9.16667 4.47528L13.1917 9.47528C13.4444 9.78278 13.4444 10.2261 13.1917 10.5336L9.025 15.5336C8.85545 15.7382 8.59853 15.8496 8.33334 15.8336Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default SVG_RightArrow;
