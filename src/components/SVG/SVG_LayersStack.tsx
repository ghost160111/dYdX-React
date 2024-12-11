import { PureComponent, ReactNode } from "react";
import "./SVG_Settings.scss";

export interface SVG_LayersStackProps {
  isActive: boolean;
}

class SVG_LayersStack extends PureComponent<SVG_LayersStackProps> {
  private get computedSvgSettingsClassName(): string {
    return this.props.isActive ? "svg-settings active" : "svg-settings";
  }

  render(): ReactNode {
    return (
      <svg
        className={this.computedSvgSettingsClassName}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 22.6401L15.9867 28.0001"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.9867 28.0001L4 22.6401"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M28 16L15.9867 21.36"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.9867 21.36L4 16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 9.36533L15.9827 14.732L28 9.36533L16.0173 4L4 9.36533Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
}

export default SVG_LayersStack;
