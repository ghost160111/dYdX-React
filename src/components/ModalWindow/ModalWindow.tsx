import { MouseEvent, PureComponent, ReactNode, Suspense } from "react";
import { connect } from "react-redux";
import { debounce } from "utils/hooks/debounce";
import styles from "./ModalWindow.module.scss";
import windowMap from "store/mappers/window";
import SVG_CloseIcon from "components/SVG/SVG_CloseIcon";
import SpinnerLoaderWrapper from "components/Loaders/SpinnerLoaderWrapper";
import ModalWindowCollection from "./ModalWindow.constants";
import uniqueIdGenerator from "utils/hooks/uniqueIdGenerator";

class ModalWindow extends PureComponent<ModalWindowProps, ModalWindowState> {
  state: Readonly<ModalWindowState> = {
    frameIsActive: false,
  };

  get windowClassName(): string {
    return styles["modal-window"];
  }

  get windowActiveClassName(): string {
    return `${this.windowClassName} ${styles["modal-window--active"]}`;
  }

  get modalWindowClassName(): string {
    return (this.props.isModalActive)
      ? this.windowActiveClassName
      : this.windowClassName;
  }

  get windowFrameClassName(): string {
    return (this.state.frameIsActive)
      ? `${styles["modal-window__frame"]} ${styles["modal-window__frame--active"]}`
      : styles["modal-window__frame"];
  }

  get modalWindowKey(): string {
    return this.props.childrenKeys;
  }

  get computedChildren(): ReactNode {
    const ModalWindowComponent = ModalWindowCollection[this.modalWindowKey];
    if (!ModalWindowComponent) {
      return <h2>No modal window found!</h2>;
    }
    return (
      <Suspense fallback={<SpinnerLoaderWrapper fixedPosition />}>
        <ModalWindowComponent />
      </Suspense>
    );
  }

  static uniqueID: string = uniqueIdGenerator(10);

  render(): ReactNode {
    return (
      <div
        className={this.modalWindowClassName}
        onClick={this.modalWindowHandler}
      >
        <div
          className={this.windowFrameClassName}
          data-modal-frame={ModalWindow.uniqueID}
        >
          <button
            type="button"
            className={styles["modal-window__close-btn"]}
            onClick={this.closeModal}
          >
            <SVG_CloseIcon />
          </button>
          {this.computedChildren}
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    this.debouncedSetFrame(this.props.isModalActive);
    this.checkEscapeEvt();
  }

  componentDidUpdate(prevProps: Readonly<ModalWindowProps>): void {
    if (prevProps.isModalActive !== this.props.isModalActive) {
      this.debouncedSetFrame(this.props.isModalActive, () => {
        if (!this.props.isModalActive) {
          this.closeModal();
        }
      });
    }

    if (prevProps.isEscapeEvtEnabled !== this.props.isEscapeEvtEnabled) {
      this.checkEscapeEvt();
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener("keydown", this.onKeydownHandler);
    this.debouncedSetFrame.cancel();
  }

  checkEscapeEvt(): void {
    if (this.props.isEscapeEvtEnabled) {
      window.addEventListener("keydown", this.onKeydownHandler);
    } else {
      window.removeEventListener("keydown", this.onKeydownHandler);
    }
  }

  debouncedSetFrame = debounce((frameIsActive: boolean, callback?: () => void) => {
    this.setState({ frameIsActive }, callback);
  }, 1);

  modalWindowHandler = (evt: MouseEvent<HTMLDivElement>): void => {
    const uniqueID: string = ModalWindow.uniqueID;
    const target: HTMLElement = evt.target as HTMLElement;
    const isChecked: boolean = !target.matches(`[data-modal-frame="${uniqueID}"]`) &&
                               !target.matches(`[data-modal-frame="${uniqueID}"] *`);
    if (isChecked) {
      this.closeModal();
    }
  }

  onKeydownHandler = (evt: KeyboardEvent): void => {
    if (this.props.isModalActive && evt.key === "Escape") {
      this.closeModal();
    }
  }

  closeModal = () => this.props.closeModal();
}

const UIModalWindow = connect(
  windowMap.mapStateToProps,
  windowMap.mapDispatchProps
)(ModalWindow);

export default UIModalWindow;
