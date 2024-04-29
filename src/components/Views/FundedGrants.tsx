import React from 'react'

export interface FundedGrantsProps {
}

class FundedGrants extends React.Component {
  constructor(props: FundedGrantsProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FundedGrants react component!</h2>
      </>
    );
  }
}

export default FundedGrants;
