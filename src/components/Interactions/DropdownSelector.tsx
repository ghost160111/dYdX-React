import { createRef, HTMLAttributes, KeyboardEvent, ReactNode, RefObject } from "react";
import { bind } from "utils/hooks/bind";
import { classNameExtender, classNameToggler } from "utils/hooks/classNameHooks";
import { escapeKeyHandlerReact } from "utils/hooks/escapeKeyHandler";
import ReactComponent from "utils/classes/ReactComponent";
import "./DropdownSelector.scss";

export interface DropdownSelectorProps extends ClassNameExtenderProps {
  children?: ReactNode;
  currItem: string;
  refDOM?: RefObject<HTMLDivElement>;
  style?: HTMLAttributes<HTMLButtonElement>;
  disabled?: boolean;
  hideArrow?: boolean;
  transparentBG?: boolean;
  childrenBeforeCurr?: ReactNode;
  setToParent?: (state: string) => void;
  removeAutoWidth?: boolean;
  hideDropdownText?: boolean;
}

export interface DropdownSelectorState {
  dropdownIsOpen: boolean;
  randomId: string;
}

class DropdownSelector extends ReactComponent<DropdownSelectorProps, DropdownSelectorState> {
  state: Readonly<DropdownSelectorState> = {
    dropdownIsOpen: false,
    randomId: Math.random().toString(16).slice(2),
  };

  dropdownSelectorRef: RefObject<HTMLButtonElement> = createRef<HTMLButtonElement>();
  dropdownListRef: RefObject<HTMLUListElement> = createRef<HTMLUListElement>();

  get computedClassName(): string {
    if (this.props.transparentBG) {
      return "dropdown-selector dropdown-selector--transparent dropdown-selector--" + this.state.randomId;
    }
    return "dropdown-selector dropdown-selector--" + this.state.randomId;
  }

  constructor(props: Readonly<DropdownSelectorProps>) {
    super(props);
    bind(this.dropdownIsActiveHandler, this);
    bind(this.handleOutsideClick, this);
    bind(this.escapeKeydownHandler, this);
  }

  render(): ReactNode {
    const { className, children, style, disabled, refDOM, childrenBeforeCurr, currItem, hideArrow } = this.props;

    return (
      <div
        className={classNameExtender(this.computedClassName, className)}
        ref={refDOM}
      >
        <button
          style={style}
          type="button"
          ref={this.dropdownSelectorRef}
          onClick={this.dropdownIsActiveHandler}
          onKeyDown={this.escapeKeydownHandler}
          disabled={disabled}
          className={classNameToggler(
            this.props.hideDropdownText
              ? "dropdown-selector__current dropdown-selector__current--hide-text"
              : "dropdown-selector__current",
            "active",
            this.state.dropdownIsOpen
          )}
        >
          {childrenBeforeCurr}
          {currItem}
          <svg
            className={classNameToggler("dropdown-selector__current__arrow-down", "active", this.state.dropdownIsOpen)}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: `${hideArrow ? "none" : ""}`
            }}
          >
            <path
              d="M12.6666 6L7.99992 10.6667L3.33325 6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul
          ref={this.dropdownListRef}
          className={classNameToggler(
            classNameExtender(
              "dropdown-selector__list scrollbar",
              this.props.removeAutoWidth
                ? "dropdown-selector__list--remove-full-width scrollbar"
                : ""
            ),
            "active",
            this.state.dropdownIsOpen)
          }
        >
          {children}
        </ul>
      </div>
    );
  }

  componentDidMount(): void {
    window.addEventListener("click", this.handleOutsideClick, { signal: this.controller.signal });
  }

  dropdownIsActiveHandler = (): void => {
    this.setState((prevState) => ({
      ...prevState,
      dropdownIsOpen: !prevState.dropdownIsOpen,
    }));
  }

  handleOutsideClick = (event: MouseEvent): void => {
    const target: HTMLElement = event.target as HTMLElement;

    if (
      !target.matches(".dropdown-selector--" + this.state.randomId) &&
      !target.matches(".dropdown-selector--" + this.state.randomId + " *") &&
      this.state.dropdownIsOpen
    ) {
      this.setState((prevState) => ({
        ...prevState,
        dropdownIsOpen: false,
      }));
    }
  }

  escapeKeydownHandler = (event: KeyboardEvent): void => {
    escapeKeyHandlerReact(() => {
      this.setState({ dropdownIsOpen: false });
      this.dropdownSelectorRef.current.blur();
    }, event);
  }
}

export default DropdownSelector;
