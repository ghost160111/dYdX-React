import { createRef, FormEvent, PureComponent, ReactNode, RefObject } from "react";
import { autoBindMethods } from "utils/hooks/bind";
import "./RangeSlider.scss";

class RangeSlider extends PureComponent<RangeSliderProps, RangeSliderState> implements BindMethods {
  rangeSliderRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
  rangePopupRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  state: Readonly<RangeSliderState> = {
    rangePopupIsActive: false,
    rangeValue: this.props?.value,
  };

  methods: BindItem[] = [
    { func: this.onChangeHandler, context: this },
    { func: this.onMouseOverHandler, context: this },
    { func: this.onMouseOutHandler, context: this },
  ];

  get computedPercentage(): string {
    const { showItOnPercentage, value } = this.props;
    return showItOnPercentage ? this.getPercentageValue(value) : value.toString();
  }

  get computedRangeValue(): string | number {
    const { computedAfterValue } = this.props;
    let finalValue: string = this.computedPercentage;

    if (computedAfterValue) {
      finalValue = this.computedPercentage + " " + computedAfterValue;
    }

    return finalValue;
  }

  get computedExternalClassName(): string {
    return this.props.className;
  }

  get computedDelayEffect(): string {
    return (this.props.delayEffect)
      ? `${this.computedExternalClassName} custom-range-wrapper custom-range-wrapper--delay-effect`
      : `${this.computedExternalClassName} custom-range-wrapper`;
  }

  get computedPopup(): ReactNode {
    return this.props.showPopup ?
      <div
        ref={this.rangePopupRef}
        className={
          this.state.rangePopupIsActive
            ? "custom-range-popup active"
            : "custom-range-popup"
        }
      >
        <div className="custom-range-popup__arrow" />
        <span className="custom-range-popup__value">
          {this.computedRangeValue}
        </span>
      </div>
      : "";
  }

  constructor(props: Readonly<RangeSliderProps>) {
    super(props);
    autoBindMethods(this);
  }

  render(): ReactNode {
    const { min, max, step, value } = this.props;
    return (
      <div className={this.computedDelayEffect}>
        {this.computedPopup}
        <input
          className="custom-range-slider"
          type="range"
          ref={this.rangeSliderRef}
          min={min}
          max={max}
          step={step}
          value={value}
          onInput={this.onChangeHandler}
        />
      </div>
    );
  }

  componentDidMount(): void {
    this.updateValues(this.rangeSliderRef.current);
    if (this.props.showPopup) {
      this.manageEvents("addEventListener");
    }
  }

  componentWillUnmount(): void {
    if (this.props.showPopup) {
      this.manageEvents("removeEventListener");
    }
  }

  componentDidUpdate(prevProps: Readonly<RangeSliderProps>): void {
    if (prevProps.value !== this.props.value) {
      this.updateValues(this.rangeSliderRef.current);
    }
  }

  manageEvents(action: "addEventListener" | "removeEventListener"): void {
    this.rangeSliderRef.current[action]("mouseover", this.onMouseOverHandler);
    this.rangeSliderRef.current[action]("mouseout", this.onMouseOutHandler);
  }

  onMouseOverHandler(): void {
    this.toggleThumb(true);
  }

  onMouseOutHandler(): void {
    this.toggleThumb(false);
  }

  onChangeHandler(evt: FormEvent<HTMLInputElement>): void {
    const target: HTMLInputElement = evt.target as HTMLInputElement;
    this.updateValues(target);
  }

  toggleThumb(value: boolean): void {
    this.setState(prevState => ({
      ...prevState,
      rangePopupIsActive: value,
    }), () => this.updateValues(this.rangeSliderRef.current));
  }

  updateValues(target?: HTMLInputElement): void {
    const { min, max, showItOnPercentage, showPopup } = this.props;

    if (!target) {
      target = this.rangeSliderRef.current;
    }

    const value: number = Number(target.value);
    target.style.backgroundSize = `${(value - min) / (max - min) * 100}% 100%`;

    if (showPopup) {
      const thumbSize: number = this.rangePopupRef.current?.offsetWidth;
      const thumbPosition: number = ((value - min) / (max - min) * (target?.offsetWidth - thumbSize));
      this.rangePopupRef.current.style.transform = `translate(${thumbPosition}px, 0)`;
    }

    const thumbValue: number | string = (showItOnPercentage) ? `${(value * 100).toFixed(0)}%` : value;
    this.setState(prevState => ({
      ...prevState,
      rangeValue: thumbValue
    }), () => this.props.onChange(value));
  }

  getPercentageValue(value: number): string {
    return `${((value * 100) / this.props.max).toFixed(0)}%`;
  }
}

export default RangeSlider;
