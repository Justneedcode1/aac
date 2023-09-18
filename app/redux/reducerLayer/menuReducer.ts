"use client";
import { createSlice } from "@reduxjs/toolkit";

interface Menu {
  status: boolean;
}

interface State {
  menu: Menu;
  isLoading: boolean;
}

const initialState: State = {
  menu: {
    status: false,
  },
  isLoading: false,
};

const menuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateMenuState(state, action) {
      state.menu.status = !state.menu.status;
    },
  },
});

export const { updateMenuState } = menuReducer.actions;

export default menuReducer.reducer;
