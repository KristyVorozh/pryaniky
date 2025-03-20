import { createSlice } from "@reduxjs/toolkit";
import { AuthFormValues } from "../types/AuthTypes";

const initialState: AuthFormValues = {
  email: "",
  password: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name }: { name: keyof AuthFormValues } = action.payload;

      state[name] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
