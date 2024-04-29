import React from 'react'

export interface ExpandableProps {
}

class Expandable extends React.Component {
  constructor(props: ExpandableProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Expandable react component!</h2>
      </>
    );
  }
}

export default Expandable;
