import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const stripe = require('stripe')('sk_test_51MUvBFEmCVqdfRpjjyYf7yHIHVre2VMvlmXdhyseRrnB7Tj2P1iIbSNn770zmjuDTHpYQ7uYNV1wtVoyzqjIPQTX00uxOUXqNX');


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
