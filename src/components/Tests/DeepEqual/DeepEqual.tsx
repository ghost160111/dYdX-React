import { Component, ReactNode } from "react";
import { deep } from "utils/hooks/deepEqual";

export interface DeepEqualTestProps {}
export interface DeepEqualTestState {
  dataProps: {
    message: string;
    questions: {
      type: {
        important: string;
        regular: string;
      }
    },
    value: number;
  },
  message: string;
}

class DeepEqualTest extends Component<DeepEqualTestProps, DeepEqualTestState> {
  state: Readonly<DeepEqualTestState> = {
    dataProps: {
      message: "",
      questions: {
        type: {
          important: "",
          regular: "",
        }
      },
      value: 0,
    },
    message: "",
  };

  constructor(props: Readonly<DeepEqualTestProps>) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div>
        <h1>Deep Equal test component</h1>
        <p>State properties to mutate and test deep function that checks for equality in objects:</p>
        <p>dataProps.message: {this.state.dataProps.message}</p>
        <p>dataProps.questions.type.important: {this.state.dataProps.questions.type.important}</p>
        <p>dataProps.questions.type.regular: {this.state.dataProps.questions.type.regular}</p>
        <p>dataProps.value: {this.state.dataProps.value}</p>
        <p>message: {this.state.message}</p>

        <input
          type="text"
          placeholder="Enter message..."
          onInput={(evt) => this.setState(prevState => ({
            ...prevState,
            dataProps: {
              ...prevState.dataProps,
              message: evt.target["value"],
            },
          }))}
        />

        <input
          type="text"
          placeholder="Enter message..."
          onInput={(evt) => this.setState(prevState => ({
            ...prevState,
            dataProps: {
              ...prevState.dataProps,
              questions: {
                ...prevState.dataProps.questions,
                type: {
                  ...prevState.dataProps.questions.type,
                  important: evt.target["value"],
                },
              },
            },
          }))}
        />

        <input
          type="text"
          placeholder="Enter message..."
          onInput={(evt) => this.setState(prevState => ({
            ...prevState,
            dataProps: {
              ...prevState.dataProps,
              questions: {
                ...prevState.dataProps.questions,
                type: {
                  ...prevState.dataProps.questions.type,
                  regular: evt.target["value"],
                },
              },
            },
          }))}
        />

        <input
          type="number"
          onInput={(evt) => this.setState(prevState => ({
            ...prevState,
            dataProps: {
              ...prevState.dataProps,
              value: evt.target["value"],
            },
          }))}
        />

        <input
          type="text"
          placeholder="Enter message..."
          onInput={(evt) => this.setState(prevState => ({
            ...prevState,
            message: evt.target["value"],
          }))}
        />
      </div>
    );
  }

  componentDidUpdate(prevProps: Readonly<DeepEqualTestProps>, prevState: Readonly<DeepEqualTestState>): void {
    console.log("COMPONENT DID UPDATE", {
      prevProps,
      prevState,
      props: this.props,
      state: this.state,
    });
  }

  shouldComponentUpdate(nextProps: Readonly<DeepEqualTestProps>, nextState: Readonly<DeepEqualTestState>): boolean {
    if (
      !deep(nextProps, this.props) ||
      !deep(nextState, this.state)
    ) {
      console.log("APPROVED FOR UPDATE", true);
      return true;
    }

    return false;
  }
}

export default DeepEqualTest;
