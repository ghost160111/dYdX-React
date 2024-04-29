import React, { MouseEventHandler } from "react";
import AppHeader from "./Layout/Header/AppHeader";

export interface AppProps {
  title: string;
}

class App extends React.Component {
  constructor(props: AppProps) {
    super(props);

    this.ctrlKClick = this.ctrlKClick.bind(this);
  }

  render(): React.ReactNode {
    return (
      <>
        <AppHeader />
      </>
    );
  }

  componentDidMount(): void {
    console.log("Component is mounted!");
    document.addEventListener("keydown", this.ctrlKClick);
  }

  componentWillUnmount(): void {
    console.log("Component is unmounted!");
    document.removeEventListener("keydown", this.ctrlKClick);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log(prevProps, prevState, snapshot);
  }

  public ctrlKClick(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key === "z") {
      console.log("Clicked on CTRL + Z");
    }
  }
}

export default App;
