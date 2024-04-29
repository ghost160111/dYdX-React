import React from 'react'

export interface ScrollTopProps {
}

class ScrollTop extends React.Component {
  constructor(props: ScrollTopProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your ScrollTop react component!</h2>
      </>
    );
  }
}

export default ScrollTop;
