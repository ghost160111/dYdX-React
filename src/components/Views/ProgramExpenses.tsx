import React from 'react'

export interface ProgramExpensesProps {
}

class ProgramExpenses extends React.Component {
  constructor(props: ProgramExpensesProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your ProgramExpenses react component!</h2>
      </>
    );
  }
}

export default ProgramExpenses;
