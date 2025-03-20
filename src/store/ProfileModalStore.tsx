import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/UserTypes";

const initialState = {
  open: false,
  isChangeModal: false,
  data: {
    companySigDate: new Date().toISOString(),
    employeeSigDate: new Date().toISOString(),
  } as TUser,
};

const profileModalStore = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setIsChangeModal: (state, action) => {
      state.isChangeModal = action.payload;
    },
    updateField: (state, action) => {
      state.data = action.payload;
    },
    updateModalField: (state, action) => {
      const { name }: { name: keyof TUser } = action.payload;

      state.data[name] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const {
  setOpen,
  updateModalField,
  setIsChangeModal,
  updateField,
  resetForm,
} = profileModalStore.actions;
export default profileModalStore.reducer;
