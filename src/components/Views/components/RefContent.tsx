import React from 'react'

export interface RefContentProps {
}

class RefContent extends React.Component {
  constructor(props: RefContentProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your RefContent react component!</h2>
      </>
    );
  }
}

export default RefContent;
