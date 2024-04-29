import React from 'react'

export interface PostsSliderProps {
}

class PostsSlider extends React.Component {
  constructor(props: PostsSliderProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your PostsSlider react component!</h2>
      </>
    );
  }
}

export default PostsSlider;
