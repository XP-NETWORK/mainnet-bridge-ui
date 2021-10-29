import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalSearch: "",
  step: 1
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
      state.isConnectOpen = action.payload;
    },
    setNFTs(state, action) {
        state.nfts = action.payload
    },
    setNFT(state, action) {
        state.nft = action.payload
    },
    toggleNFTInfo(state, action) {
        state.nftDetails = action.payload
        state.onlyDetails = false
    },
    toggleNFTInfoOnlyDetails(state, action) {
        state.nftDetails = action.payload
        state.onlyDetails = true
    },
    setStep(state, action) {
        state.step = action.payload
    },
    toggleDisconnect(state, action) {
        state.disconnectOpen = action.payload
    }
  },
});

export const { toggleNFTInfo, 
    setTo, 
    setFrom, 
    toggleNFTInfoOnlyDetails, 
    toggleConnect, 
    setNFTs, 
    setNFT, 
    setStep,
    toggleDisconnect
} = generalSlice.actions;

export default generalSlice.reducer;
