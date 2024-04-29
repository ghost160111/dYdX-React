import React from 'react'

export interface Error404Props {
}

class Error404 extends React.Component {
  constructor(props: Error404Props) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Error404 react component!</h2>
      </>
    );
  }
}

export default Error404;
