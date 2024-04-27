import React from "react";

export interface AppProps {
  title: string;
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  state: Readonly<{}> = {
    title: "This is title"
  }

  render(): React.ReactNode {
    return (
      <>
        <h1 ref-data={this.props["title"]}>{this.props["title"]}</h1>
        <h2>This is title - {this.state["title"]}</h2>
        <input type="text" onInput={this.onInputHandler} />
      </>
    );
  }

  public onInputHandler(event: any): void {
    this.setState({ title: event.target.value });
  }
}

export default App;
