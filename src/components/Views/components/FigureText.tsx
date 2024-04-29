import React from 'react'

export interface FigureTextProps {
}

class FigureText extends React.Component {
  constructor(props: FigureTextProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your FigureText react component!</h2>
      </>
    );
  }
}

export default FigureText;
