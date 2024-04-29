import React from 'react'

export interface FAQListProps {
}

class FAQList extends React.Component {
  constructor(props: FAQListProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FAQList react component!</h2>
      </>
    );
  }
}

export default FAQList;
