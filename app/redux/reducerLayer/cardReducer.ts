"use client";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  cardId: number | null;
}

const initialState: State = {
  cardId: 0,
};

const cardReducer = createSlice({
  name: "card",
  initialState,
  reducers: {
    updateCardIdState(state, action) {
      state.cardId = action.payload;
    },
  },
});

export const { updateCardIdState } = cardReducer.actions;

export default cardReducer.reducer;
