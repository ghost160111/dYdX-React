import React from 'react'

export interface BlogViewProps {
}

class BlogView extends React.Component {
  constructor(props: BlogViewProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your BlogView react component!</h2>
      </>
    );
  }
}

export default BlogView;
