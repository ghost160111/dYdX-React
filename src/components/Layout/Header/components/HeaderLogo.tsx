import React from 'react'

export interface HeaderLogoProps {
}

class HeaderLogo extends React.Component {
  constructor(props: HeaderLogoProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your HeaderLogo react component!</h2>
      </>
    );
  }
}

export default HeaderLogo;
