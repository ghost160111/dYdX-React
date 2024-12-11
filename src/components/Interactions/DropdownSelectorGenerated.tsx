import arrowDownSvg from "assets/images/arrow-down.svg";
import { createRef, KeyboardEvent, PureComponent, ReactNode, RefObject } from 'react';
import { bind } from "utils/hooks/bind";
import { classNameExtender, classNameToggler } from 'utils/hooks/classNameHooks';
import { escapeKeyHandlerReact } from "utils/hooks/escapeKeyHandler";
import Button from "./Button";
import "./DropdownSelector.scss";

export interface DropdownSelectorGeneratedProps extends ClassNameExtenderProps {
  drItems: (ReactNode | string)[];
}

export interface DropdownSelectorGeneratedState {
  dropdownIsOpen: boolean;
  currItem: string;
}

class DropdownSelectorGenerated extends PureComponent<DropdownSelectorGeneratedProps, DropdownSelectorGeneratedState> {
  state: Readonly<DropdownSelectorGeneratedState> = {
    dropdownIsOpen: false,
    currItem: ""
  }

  dropdownSelectorRef: RefObject<HTMLButtonElement> = createRef<HTMLButtonElement>();
  dropdownListRef: RefObject<HTMLUListElement> = createRef<HTMLUListElement>();

  constructor(props: Readonly<DropdownSelectorGeneratedProps>) {
    super(props);
    bind(this.dropdownIsActiveHandler, this);
    bind(this.handleOutsideClick, this);
    bind(this.escapeKeydownHandler, this);
  }

  render(): ReactNode {
    const { className, drItems } = this.props;

    return (
      <div className={classNameExtender("dropdown-selector", className)}>
        <button
          type="button"
          ref={this.dropdownSelectorRef}
          onClick={this.dropdownIsActiveHandler}
          onKeyDown={this.escapeKeydownHandler}
          className={classNameToggler("dropdown-selector__current", "active", this.state.dropdownIsOpen)}
        >
          {this.state.currItem}
          <img
            src={arrowDownSvg}
            alt="Arrow Down Svg"
            className={classNameToggler("dropdown-selector__current__arrow-down", "active", this.state.dropdownIsOpen)}
          />
        </button>
        <ul
          ref={this.dropdownListRef}
          className={classNameToggler("dropdown-selector__list scrollbar", "active", this.state.dropdownIsOpen)}
        >
          {drItems.map((item: ReactNode | string, i: number) => {
            return (typeof item === "string")
              ? <li key={i}><Button>{item}</Button></li>
              : <li key={i}>{item}</li>
          })}
        </ul>
      </div>
    );
  }

  componentDidMount(): void {
    window.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount(): void {
    window.removeEventListener("click", this.handleOutsideClick);
  }

  dropdownIsActiveHandler(): void {
    this.setState((prevState) => ({
      dropdownIsOpen: !prevState.dropdownIsOpen,
    }));
  }

  handleOutsideClick(event: MouseEvent): void {
    const target: HTMLElement = event.target as HTMLElement;

    if (
      !target.matches(".dropdown-selector") &&
      !target.matches(".dropdown-selector *") &&
      this.state.dropdownIsOpen
    ) {
      this.setState({ dropdownIsOpen: false });
    }
  }

  escapeKeydownHandler(event: KeyboardEvent): void {
    escapeKeyHandlerReact(() => {
      this.setState({ dropdownIsOpen: false });
      this.dropdownSelectorRef.current.blur();
    }, event);
  }

  onItemClickHandler(): void {
  }

  observeDropdown(): void {
  }
}

export default DropdownSelectorGenerated;
