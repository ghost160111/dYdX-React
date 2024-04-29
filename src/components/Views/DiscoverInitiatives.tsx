import React from 'react'

export interface DiscoverInitiativesProps {
}

class DiscoverInitiatives extends React.Component {
  constructor(props: DiscoverInitiativesProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your DiscoverInitiatives react component!</h2>
      </>
    );
  }
}

export default DiscoverInitiatives;
