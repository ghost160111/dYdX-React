import React from 'react'

export interface AppHeaderProps {
}

class AppHeader extends React.Component {
  constructor(props: AppHeaderProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your AppHeader react component!</h2>
      </>
    );
  }
}

export default AppHeader;
