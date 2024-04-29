import React from 'react'

export interface LoadingProps {
}

class Loading extends React.Component {
  constructor(props: LoadingProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Loading react component!</h2>
      </>
    );
  }
}

export default Loading;
