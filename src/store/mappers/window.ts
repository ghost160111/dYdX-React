import { closeModal, setEscapeEvt, setModal } from "store/features/windowSlice";
import { RootState } from "store/Redux-store";

const mapStateToProps = (state: RootState) => ({
  isModalActive: state.window.isModalActive,
  isEscapeEvtEnabled: state.window.isEscapeEvtEnabled,
  childrenKeys: state.window.childrenKeys,
});

const mapDispatchProps = {
  setModal,
  setEscapeEvt,
  closeModal,
};

const windowMap = {
  mapStateToProps,
  mapDispatchProps,
};

export default windowMap;
