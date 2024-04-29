import React from 'react'

export interface PostCardProps {
}

class PostCard extends React.Component {
  constructor(props: PostCardProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your PostCard react component!</h2>
      </>
    );
  }
}

export default PostCard;
