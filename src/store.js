import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../src/redux/authSlice'
import collectionReducer from '../src/redux/collectionSlice'
import auctionReducer from '../src/redux/auctionSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collection: collectionReducer,
    auction: auctionReducer
  },
})