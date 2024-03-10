import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isauth: false,
  namee: "",
  email: "",
  male: true,
};
const authslice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: {
      prepare: (name, email) => {
        return {
          payload: { name, email },
        };
      },
      reducer: (state, action) => {
        state.namee = action.payload.name;
        state.email = action.payload.email;
        state.isauth = true;
      },
    },
    logout: (state, action) => {
      state.namee = "";
      state.email = "";
      state.isauth = false;
    },
    gender: {
      prepare: (x) => {
        return{
            payload:{x:x}
        }
      },
      reducer: (state, action) => {
        state.male=action.payload.x;
      },
    },
  },
});
export const { login, logout,gender } = authslice.actions;
export default authslice.reducer;
