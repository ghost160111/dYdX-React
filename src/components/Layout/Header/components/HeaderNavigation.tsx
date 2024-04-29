import React from 'react'

export interface HeaderNavigationProps {
}

class HeaderNavigation extends React.Component {
  constructor(props: HeaderNavigationProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your HeaderNavigation react component!</h2>
      </>
    );
  }
}

export default HeaderNavigation;
