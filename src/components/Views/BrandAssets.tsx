import React from 'react'

export interface BrandAssetsProps {
}

class BrandAssets extends React.Component {
  constructor(props: BrandAssetsProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your BrandAssets react component!</h2>
      </>
    );
  }
}

export default BrandAssets;
