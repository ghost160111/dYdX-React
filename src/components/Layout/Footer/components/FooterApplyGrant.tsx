import React from 'react'

export interface FooterApplyGrantProps {
}

class FooterApplyGrant extends React.Component {
  constructor(props: FooterApplyGrantProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FooterApplyGrant react component!</h2>
      </>
    );
  }
}

export default FooterApplyGrant;
