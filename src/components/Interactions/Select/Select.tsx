import { ReactNode } from "react";
import { getWithTranslation } from "i18n/hooks";
import SVG_ArrowDown from "components/SVG/SVG_ArrowDown";
import styles from "./Select.module.scss";
import ReactComponent from "utils/classes/ReactComponent";

class Select extends ReactComponent<SelectProps, SelectState> {
  state: Readonly<SelectState> = {
    selected: { ...this.props.selected },
    toggled: false,
  };

  get computedListItem(): string {
    const className: string = styles["select__list__item-btn"];

    if (!this.props.addTransitions) {
      return className;
    }

    return `${className} ${styles["select__list__item-btn--transition"]}`;
  }

  get computedListItemActive(): string {
    return `${this.computedListItem} ${styles["select__list__item-btn--active"]}`;
  }

  get computedColor(): string {
    const className: string = this.props.addTransitions ? `${styles["select__btn"]} ${styles["select__btn--transition"]}` : styles["select__btn"];
    let finalClassName: string;

    function computedClassName(modifierClass: SelectColors): string {
      return className + " " + styles[`select__btn--${modifierClass}`];
    }

    switch (this.props.color) {
      case "transparent":
        finalClassName = computedClassName("transparent");
        break;
      case "black":
        finalClassName = computedClassName("black");
        break;
      case "orange":
        finalClassName = computedClassName("orange");
        break;
    }

    return finalClassName;
  }

  get computedArrowColor(): string {
    return this.props.arrowColor ?? "#000";
  }

  get computedSelectClassName(): string {
    return this.state.toggled ? `${styles["select"]} ${styles["select--active"]}` : styles["select"];
  }

  get computedSelectList(): string {
    const selectList: string = this.props.hideSelected ? `${styles["select__list"]} ${styles["select__list--hide-selected"]}` : styles["select__list"];
    const transitioned: string = selectList + " " + styles["select__list--transition"];
    const selected: string = this.props.addTransitions ? transitioned : selectList;

    return this.state.toggled ? `${selected} ${styles["select__list--active"]}` : selected;
  }

  get computedArrow(): ReactNode {
    return this.props.hideArrow ? null : <SVG_ArrowDown stroke={this.computedArrowColor} />;
  }

  get computedSelectedItem(): ReactNode {
    const { t } = this.props;
    const { tKey, content, id } = this.state.selected;

    return tKey ? t(this.state.selected.tKey) : (content ?? id);
  }

  get list(): ReactNode {
    return this.props.list.map(({ id, content, tKey }) =>
      <li key={id}>
        <button
          type="button"
          className={this.state.selected.id === id ? this.computedListItemActive : this.computedListItem}
          onClick={() => this.handleOnSelect(id, content, tKey)}
        >
          {tKey ? this.props.t(tKey) : (content ?? id)}
        </button>
      </li>
    );
  }

  get languageChangedExists(): boolean {
    return this.props.onLanguageChanged ? true : false;
  }

  render(): ReactNode {
    const { width, height } = this.props;

    return (
      <div className={this.computedSelectClassName}>
        <button
          className={this.computedColor}
          type="button"
          onClick={this.toggleSelect}
          style={{ width, height }}
        >
          {this.computedSelectedItem}
          {this.computedArrow}
        </button>
        <ul
          className={this.computedSelectList}
          style={{ top: height ? height + 8 : null }}
        >
          {this.list}
        </ul>
      </div>
    );
  }

  componentDidMount(): void {
    this.manageEvents();
    if (!this.languageChangedExists) return;
    this.props.i18n.on("languageChanged", this.props.onLanguageChanged);
  }

  componentWillUnmount(): void {
    super.componentWillUnmount();
    if (!this.languageChangedExists) return;
    this.props.i18n.off("languageChanged", this.props.onLanguageChanged);
  }

  manageEvents(): void {
    const options: AddEventListenerOptions = { signal: this.controller.signal };
    window.addEventListener("click", this.handleOutsideClick, options);
    window.addEventListener("keydown", this.handleOnEscape, options);
  }

  toggleSelect = (): void => {
    this.setState(prevState => ({
      ...prevState,
      toggled: !prevState.toggled,
    }));
  }

  handleOnSelect = (id: string, content: ReactNode, tKey: string): void => {
    this.setState(prevState => ({
      ...prevState,
      selected: {
        ...prevState.selected,
        id,
        content,
        tKey,
      },
    }), () => this.props.onSelect(id, content, tKey));
  }

  handleOutsideClick = (evt: MouseEvent): void => {
    const target: HTMLElement = evt.target as HTMLElement;
    const isMatching: boolean = !target.matches(`.${styles["select"]}`) && !target.matches(`.${styles["select"]} *`);

    if (isMatching) {
      this.setToggle(false);
    }
  }

  handleOnEscape = (evt: KeyboardEvent): void => {
    const isEscapeKey: boolean = evt.key === "Escape";
    const selectBtnClassName: string = `.${styles["select__btn"]}`;
    const isSelectBtnFocused: boolean = document.activeElement.matches(selectBtnClassName);

    if (isEscapeKey && isSelectBtnFocused) {
      this.setToggle(false);
    }
  }

  setToggle(value: boolean): void {
    this.setState(prevState => ({
      ...prevState,
      toggled: value,
    }));
  }
}

const InjectedSelect = getWithTranslation(Select);

export default InjectedSelect;
