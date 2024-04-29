import React from 'react'

export interface HomeProps {
}

class Home extends React.Component {
  constructor(props: HomeProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Home react component!</h2>
      </>
    );
  }
}

export default Home;
