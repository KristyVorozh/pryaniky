import { configureStore } from "@reduxjs/toolkit";
import authStore from "./AuthStore";
import profileModalStore from "./ProfileModalStore";

export const store = configureStore({
  reducer: {
    form: authStore,
    modal: profileModalStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
