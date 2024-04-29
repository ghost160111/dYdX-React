import React from 'react'

export interface FAQProps {
}

class FAQ extends React.Component {
  constructor(props: FAQProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FAQ react component!</h2>
      </>
    );
  }
}

export default FAQ;
