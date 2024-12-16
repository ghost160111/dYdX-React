import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MobileMenuState {
  isMobileMenuActive: boolean;
  isEscapeEvtEnabled: boolean;
}

export interface MobileMenuActions {
  setMobileMenuState: (value: boolean) => void;
  setEscapeEvtEnabled: (value: boolean) => void;
}

export interface MobileMenuReduxProps extends MobileMenuState, MobileMenuActions {}

export const mobileMenuSlice = createSlice({
  name: "mobile-menu",
  initialState: {
    isMobileMenuActive: false,
    isEscapeEvtEnabled: true,
  },
  reducers: {
    setMobileMenuState: (state, action: PayloadAction<boolean>): void => {
      state.isMobileMenuActive = action.payload;
    },
    setEscapeEvtEnabled: (state, action: PayloadAction<boolean>): void => {
      state.isEscapeEvtEnabled = action.payload;
    },
  },
});

export const { setMobileMenuState, setEscapeEvtEnabled } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
