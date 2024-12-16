import { ReactNode } from "react";
import styles from "./Burger.module.scss";

interface BurgerToggle {
  isToggled: boolean;
}

function isToggled(toggle: boolean): string {
  return toggle
    ? `${styles["burger-btn__svg"]} ${styles["burger-btn__svg--active"]}`
    : styles["burger-btn__svg"];
}

export function BurgerSVG(props: BurgerToggle): ReactNode {
  return (
    <svg
      className={isToggled(props.isToggled)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12H14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8H14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 4H14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CancelSVG(props: BurgerToggle): ReactNode {
  return (
    <svg
      className={isToggled(props.isToggled)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
