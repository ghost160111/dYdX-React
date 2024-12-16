import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "store/features/counterSlice";
import windowReducer from "store/features/windowSlice";
import mobileMenuReducer from "store/features/mobileMenuSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    window: windowReducer,
    mobileMenu: mobileMenuReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
