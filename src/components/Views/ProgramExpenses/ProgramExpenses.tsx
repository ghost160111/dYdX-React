import { PureComponent, ReactNode } from "react";
import styles from "./ProgramExpenses.module.scss";

class ProgramExpenses extends PureComponent<ProgramExpensesProps, ProgramExpensesState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        ProgramExpenses component
      </div>
    );
  }
}

export default ProgramExpenses;