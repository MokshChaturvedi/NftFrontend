import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import auctionApi from "../constants/auctionApi";
import { postWithToken } from "../services/apiServices";

const initialState = {
    createAuctionApiStatus: null,
    createBidApiStatus : null,
};

export const createAuctionApi = createAsyncThunk(
    "auction/createAuctionApi",
    async (data) => await postWithToken(auctionApi.CreateAuction, data)
);

export const createBidApi = createAsyncThunk(
    "auction/createBidApi",
    async (data) => await postWithToken(auctionApi.CreateBid, data)
);

export const auctionSlice = createSlice({
    name: "auctionSlice",
    initialState,
    reducers: {
        setAuctionApiStatus: (state) => {
            state.createAuctionApiStatus = null
        },
        setBidApiStatus: (state) => {
            state.createBidApiStatus = null
        }
    },
    extraReducers: {
        // Create Auction Item
        [createAuctionApi.fulfilled]: (state, action) => {
            state.createAuctionApiStatus = action.payload
        },
        [createAuctionApi.rejected]: (state, action) => {
            state.createAuctionApiStatus = action.payload
        },

        // Create Auction Bid on item Api
        [createBidApi.fulfilled]: (state, action) => {
            state.createBidApiStatus = action.payload
        },
        [createBidApi.rejected]: (state, action) => {
            state.createBidApiStatus = action.payload
        },
    },
});

export const { setAuctionApiStatus , setBidApiStatus} = auctionSlice.actions;

export default auctionSlice.reducer;
