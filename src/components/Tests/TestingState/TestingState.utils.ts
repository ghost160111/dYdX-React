import { PureComponent } from "react";

export function TEST_handleInterval(context: PureComponent<TestingStateProps, TestingStateState>): void {
  context.setState(prevState => {
    let test: string = "";
    let index: number = prevState.index;

    index++;

    switch (index) {
      case 0:
      case 1: test = ""; break;
      case 2: test = "."; break;
      case 3: test = ".."; break;
      case 4: test = "..."; index = 0; break;
    }

    return {
      ...prevState,
      index,
      dots: test,
    };
  });
}
