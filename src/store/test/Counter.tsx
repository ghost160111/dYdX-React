import { getWithTranslation } from "i18n/hooks";
import { PureComponent, ReactNode } from "react";
import { WithTranslation } from "react-i18next";
import { connect } from "react-redux";
import { CounterProps } from "store/features/counterSlice";
import counterMap from "store/mappers/counter";

interface CounterPropType extends CounterProps, WithTranslation {}

// IMPORTANT NOTE:
// So, results are good, it works with everything, you can wrap components, other dependencies, it works seamlessly.

class Counter extends PureComponent<CounterPropType> {
  render(): ReactNode {
    return (
      <div>
        <h1>Counter: {this.props.value}, {this.props.t("nav.news")}</h1>
        <button onClick={() => this.props.i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => this.props.i18n.changeLanguage("uz")}>UZ</button>
        <button onClick={() => this.props.i18n.changeLanguage("oz")}>OZ</button>
        <button onClick={() => this.props.i18n.changeLanguage("ru")}>RU</button>
        <button type="button" onClick={this.handleIncrement}>Increment</button>
        <button type="button" onClick={this.handleDecrement}>Decrement</button>
        <button type="button" onClick={this.handleIncrementByAmount}>Increment by 5</button>
        <button type="button" onClick={this.handleDecrementByAmount}>Decrement by 3</button>
      </div>
    );
  }

  handleIncrement = () => this.props.increment();
  handleDecrement = () => this.props.decrement();
  handleIncrementByAmount = () => this.props.incrementByAmount(5);
  handleDecrementByAmount = () => this.props.decrementByAmount(3);
}

const InjectedCounter = connect(counterMap.mapStateToProps, counterMap.mapDispatchProps)(getWithTranslation(Counter));

export default InjectedCounter;
