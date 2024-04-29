import React from 'react'

export interface BlogsProps {
}

class Blogs extends React.Component {
  constructor(props: BlogsProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Blogs react component!</h2>
      </>
    );
  }
}

export default Blogs;
