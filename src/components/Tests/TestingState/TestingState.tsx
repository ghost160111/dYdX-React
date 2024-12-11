import { PureComponent, ReactNode } from "react";
import { autoBindMethods } from "utils/hooks/bind";
import { TESTING_STATE } from "./TestingState.constants";
import { TEST_handleInterval } from "./TestingState.utils";
import styles from "./TestingState.module.scss";

class TestingState extends PureComponent<TestingStateProps, TestingStateState> implements BindMethods {
  state: Readonly<TestingStateState> = {
    ...TESTING_STATE(this.props.test),
  };

  methods: BindItem[] = [
    { func: this.TEST_handleInterval, context: this },
  ];

  intervalRef: SetInterval;

  constructor(props: Readonly<TestingStateProps>) {
    super(props);
    autoBindMethods(this);
  }

  render(): ReactNode {
    return (
      <>
        <h1 className={styles["test-title-state"]}>
          {this.state.test} {this.state.dots}
        </h1>
      </>
    );
  }

  componentDidMount(): void {
    this.intervalRef = setInterval(this.TEST_handleInterval, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalRef);
  }

  TEST_handleInterval(): void {
    TEST_handleInterval(this);
  }
}

export default TestingState;
