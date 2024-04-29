import React from 'react'

export interface SocialLinksProps {
}

class SocialLinks extends React.Component {
  constructor(props: SocialLinksProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your SocialLinks react component!</h2>
      </>
    );
  }
}

export default SocialLinks;
