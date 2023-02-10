import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import collectionApi from "../constants/collectionApi";
import { getWithToken, postWithoutToken, postWithToken, getWithoutToken } from "../services/apiServices";

const initialState = {
  apiStatus: null,
  getAllCollectionApiStatus: { status: null, data: null },
  getCollectionByUserApiStatus: { status: null, data: null },
  getCollectionByIdApiStatus: { status: null, data: null },

  getCollectionByCategoriesApiStatus: { status: null, data: null },

  getCollectionItemByIdApiStatus: { status: null, data: null },
  getLastAddedItemApiStatus: { status: null, data: null },
  getAllLiveAuctionItemStatus: { status: null, data: null },

  searchCollectionApiStatus: { status: null, data: null },

  createBookingApiStatus: { status: null, data: null },
  createPaymentSucessStatus: { status: null, data: null }
};

export const createCollectionApi = createAsyncThunk(
  "collection/createCollectionApi",
  async (data) => await postWithToken(collectionApi.CreateCollection, data)
);

export const createCollectionItemApi = createAsyncThunk(
  "collection/createCollectionItemApi",
  async (data) => await postWithToken(collectionApi.CreateItem, data)
);

export const getAllCollectionApi = createAsyncThunk(
  "collection/getAllCollectionApi",
  async () => await postWithoutToken(collectionApi.GetAllCollection)
);

export const getCollectionByUserApi = createAsyncThunk(
  "collection/getCollectionByUserApi",
  async () => await getWithToken(collectionApi.GetCollectionByUser)
);

export const getCollectionByIdApi = createAsyncThunk(
  "collection/getCollectionByIdApi",
  async (data) => await postWithToken(collectionApi.GetCollectionById, { id: data })
);

export const getCollectionItemByIdApi = createAsyncThunk(
  "collection/getCollectionItemByIdApi",
  async (data) => await postWithoutToken(collectionApi.GetItemById, { id: data })
);

export const updateCollectionApi = createAsyncThunk(
  "collection/updateCollectionApi",
  async (data) => await postWithToken(collectionApi.UpdateCollection, data)
);

export const getLastAddedItemApi = createAsyncThunk(
  "collection/getLastAddedItemApi",
  async () => await getWithoutToken(collectionApi.GetLastAddedItem)
);

export const getCollectionByCategoriesApi = createAsyncThunk(
  "collection/getCollectionByCategoriesApi",
  async (data) => await postWithoutToken(collectionApi.GetCollectionByCategories, data)
);

export const searchCollectionApi = createAsyncThunk(
  "collection/searchCollectionApi",
  async (data) => await postWithoutToken(collectionApi.searchCollection, data)
);

export const createBookingApi = createAsyncThunk(
  "item/createBookingApi",
  async (data) => await postWithToken(collectionApi.CreateBooking, data)
);

export const getAllLiveAuctionItemApi = createAsyncThunk(
  "collection/getAllLiveAuctionItemApi",
  async () => await getWithoutToken(collectionApi.GetAllLiveAuctionItem)
)

//payment-status
export const createPaymentSucessApi = createAsyncThunk(
  "/sucess-payment",
  async (data) => await postWithToken(collectionApi.createPaymentStatusData,data)
);


export const collectionSlice = createSlice({
  name: "collectionSlice",
  initialState,
  reducers: {
    setCollectionApiStatus: (state) => {
      state.apiStatus = null
    }
  },
  extraReducers: {

    // Create Collection
    [createCollectionApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [createCollectionApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // Update Collection
    [updateCollectionApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [updateCollectionApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // Create Collection Item
    [createCollectionItemApi.fulfilled]: (state, action) => {
      state.apiStatus = action.payload
    },
    [createCollectionItemApi.rejected]: (state, action) => {
      state.apiStatus = action.payload
    },

    // Get All Collection
    [getAllCollectionApi.pending]: (state) => {
      state.getAllCollectionApiStatus.status = 'pending'
    },
    [getAllCollectionApi.fulfilled]: (state, action) => {
      state.getAllCollectionApiStatus.status = 'fulfilled'
      state.getAllCollectionApiStatus.data = action.payload
    },
    [getAllCollectionApi.rejected]: (state, action) => {
      state.getAllCollectionApiStatus.status = 'rejected'
      state.getAllCollectionApiStatus.data = action.payload
    },

    // Get Collection By User
    [getCollectionByUserApi.pending]: (state) => {
      state.getCollectionByUserApiStatus.status = 'pending'
    },
    [getCollectionByUserApi.fulfilled]: (state, action) => {
      state.getCollectionByUserApiStatus.status = 'fulfilled'
      state.getCollectionByUserApiStatus.data = action.payload
    },
    [getCollectionByUserApi.rejected]: (state, action) => {
      state.getCollectionByUserApiStatus.status = 'rejected'
      state.getCollectionByUserApiStatus.data = action.payload
    },

    // Get Collection By ID
    [getCollectionByIdApi.pending]: (state) => {
      state.getCollectionByIdApiStatus.status = 'pending'
    },
    [getCollectionByIdApi.fulfilled]: (state, action) => {
      state.getCollectionByIdApiStatus.status = 'fulfilled'
      state.getCollectionByIdApiStatus.data = action.payload
    },
    [getCollectionByIdApi.rejected]: (state, action) => {
      state.getCollectionByIdApiStatus.status = 'rejected'
      state.getCollectionByIdApiStatus.data = action.payload
    },

    // Get Collection Item By ID
    [getCollectionItemByIdApi.pending]: (state) => {
      state.getCollectionItemByIdApiStatus.status = 'pending'
    },
    [getCollectionItemByIdApi.fulfilled]: (state, action) => {
      state.getCollectionItemByIdApiStatus.status = 'fulfilled'
      state.getCollectionItemByIdApiStatus.data = action.payload
    },
    [getCollectionItemByIdApi.rejected]: (state, action) => {
      state.getCollectionItemByIdApiStatus.status = 'rejected'
      state.getCollectionItemByIdApiStatus.data = action.payload
    },

    // Get last Added Item 
    [getLastAddedItemApi.pending]: (state) => {
      state.getLastAddedItemApiStatus.status = 'pending'
    },
    [getLastAddedItemApi.fulfilled]: (state, action) => {
      state.getLastAddedItemApiStatus.status = 'fulfilled'
      state.getLastAddedItemApiStatus.data = action.payload
    },
    [getLastAddedItemApi.rejected]: (state, action) => {
      state.getLastAddedItemApiStatus.status = 'rejected'
      state.getLastAddedItemApiStatus.data = action.payload
    },

    // Get Collection By Categories
    [getCollectionByCategoriesApi.pending]: (state) => {
      state.getCollectionByCategoriesApiStatus.status = 'pending'
    },
    [getCollectionByCategoriesApi.fulfilled]: (state, action) => {
      state.getCollectionByCategoriesApiStatus.status = 'fulfilled'
      state.getCollectionByCategoriesApiStatus.data = action.payload
    },
    [getCollectionByCategoriesApi.rejected]: (state, action) => {
      state.getCollectionByCategoriesApiStatus.status = 'rejected'
      state.getCollectionByCategoriesApiStatus.data = action.payload
    },


    // Search Collection Api
    [searchCollectionApi.pending]: (state) => {
      state.searchCollectionApiStatus.status = 'pending'
    },
    [searchCollectionApi.fulfilled]: (state, action) => {
      state.searchCollectionApiStatus.status = 'fulfilled'
      state.searchCollectionApiStatus.data = action.payload
    },
    [searchCollectionApi.rejected]: (state, action) => {
      state.searchCollectionApiStatus.status = 'rejected'
      state.searchCollectionApiStatus.data = action.payload
    },

    // create booking api 

    [createBookingApi.pending]: (state) => {
      state.createBookingApiStatus.status = 'pending'
    },
    [createBookingApi.fulfilled]: (state, action) => {
      state.createBookingApiStatus.status = 'fulfilled'
      state.createBookingApiStatus.data = action.payload
    },
    [createBookingApi.rejected]: (state, action) => {
      state.createBookingApiStatus.status = 'rejected'
      state.createBookingApiStatus.data = action.payload
    },

    // Get all Live Auction Item 
    [getAllLiveAuctionItemApi.pending]: (state) => {
      state.getAllLiveAuctionItemStatus.status = 'pending'
    },
    [getAllLiveAuctionItemApi.fulfilled]: (state, action) => {
      state.getAllLiveAuctionItemStatus.status = 'fulfilled'
      state.getAllLiveAuctionItemStatus.data = action.payload
    },
    [getAllLiveAuctionItemApi.rejected]: (state, action) => {
      state.getAllLiveAuctionItemStatus.status = 'rejected'
      state.getAllLiveAuctionItemStatus.data = action.payload
    },



    //create successs API
    [createPaymentSucessApi.sucess]: (state) => {
      state.createPaymentSucessStatus.status = 'fulfilled'
    },
    [createPaymentSucessApi.rejected]: (state) => {
      state.createPaymentSucessStatus.status = "rejected"
    }



  },
});

export const { setCollectionApiStatus } = collectionSlice.actions;

export default collectionSlice.reducer;
