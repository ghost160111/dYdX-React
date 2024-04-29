import React from 'react'

export interface AppMainProps {
}

class AppMain extends React.Component {
  constructor(props: AppMainProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your AppMain react component!</h2>
      </>
    );
  }
}

export default AppMain;
