import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./Logo.module.scss";
import logo from "assets/images/Logo.svg";

function Logo(): ReactNode {
  return (
    <div className={styles["logo"]}>
      <NavLink className={styles["logo__link"]} to={"/"}>Main</NavLink>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
