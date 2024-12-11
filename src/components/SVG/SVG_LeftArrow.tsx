import { PureComponent, ReactNode } from "react";

class SVG_LeftArrow extends PureComponent<SVG_LeftRightArrowTypes> {
  render(): ReactNode {
    return (
      <svg
        className="left-arrow-svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={this.props.fill ?? "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="arrow"
          d="M11.525 15.8337C11.2728 15.8346 11.0338 15.7212 10.875 15.5254L6.84997 10.5254C6.59721 10.2179 6.59721 9.77458 6.84997 9.46708L11.0166 4.46708C11.3112 4.1127 11.8373 4.06419 12.1916 4.35874C12.546 4.6533 12.5945 5.17936 12.3 5.53374L8.57497 10.0004L12.175 14.4671C12.3831 14.7168 12.4269 15.0648 12.2873 15.3584C12.1476 15.652 11.85 15.8375 11.525 15.8337Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default SVG_LeftArrow;
