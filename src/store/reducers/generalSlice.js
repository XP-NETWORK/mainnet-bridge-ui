import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalSearch: ""

};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setTo(state, action) {
      state.to = action.payload;
    },
    setFrom(state, action) {
        state.from = action.payload;
    },
    toggleConnect(state, action) {
        state.isConnectOpen = action.payload
    }
  },
});

export const {
    setTo,
    setFrom,
    toggleConnect
} = generalSlice.actions;

export default generalSlice.reducer;
