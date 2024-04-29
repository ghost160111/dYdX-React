import React from 'react'

export interface ApplyForGrantProps {
}

class ApplyForGrant extends React.Component {
  constructor(props: ApplyForGrantProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your ApplyForGrant react component!</h2>
      </>
    );
  }
}

export default ApplyForGrant;
