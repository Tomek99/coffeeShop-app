import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialstate = { value: { username: "" } };
const userSlice = createSlice({
  name: "user",
  initialstate: initialstate,

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state = initialstate;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
