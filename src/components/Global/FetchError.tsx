import React from 'react'

export interface FetchErrorProps {
}

class FetchError extends React.Component {
  constructor(props: FetchErrorProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FetchError react component!</h2>
      </>
    );
  }
}

export default FetchError;
