import { createSlice, PayloadAction } from "@reduxjs/toolkit";

declare global {
  type ModalWindowKeys =
    | "Home"
    | "About"
    | "News";
}

export interface WindowState {
  isModalActive: boolean;
  isEscapeEvtEnabled: boolean;
  childrenKeys: ModalWindowKeys;
}

export interface WindowActions {
  setModal: (childrenKeys: ModalWindowKeys) => void;
  setEscapeEvt: (value: boolean) => void;
  closeModal: () => void;
}

export interface WindowProps extends WindowState, WindowActions {}

export const windowSlice = createSlice({
  name: "modal-window",
  initialState: {
    isModalActive: false,
    isEscapeEvtEnabled: true,
    childrenKeys: "",
  },
  reducers: {
    setModal: (state, action: PayloadAction<ModalWindowKeys>): void => {
      state.isModalActive = true;
      state.childrenKeys = action.payload;
    },
    setEscapeEvt: (state, action: PayloadAction<boolean>): void => {
      state.isEscapeEvtEnabled = action.payload;
    },
    closeModal: (state): void => {
      state.isModalActive = false;
      state.childrenKeys = "";
    },
  },
});

export const { setModal, setEscapeEvt, closeModal } = windowSlice.actions;
export default windowSlice.reducer;
