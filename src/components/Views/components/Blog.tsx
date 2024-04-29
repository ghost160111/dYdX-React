import React from 'react'

export interface BlogProps {
}

class Blog extends React.Component {
  constructor(props: BlogProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Blog react component!</h2>
      </>
    );
  }
}

export default Blog;
