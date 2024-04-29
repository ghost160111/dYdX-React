import React from 'react'

export interface AppFooterProps {
}

class AppFooter extends React.Component {
  constructor(props: AppFooterProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your AppFooter react component!</h2>
      </>
    );
  }
}

export default AppFooter;
