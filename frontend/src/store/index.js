import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const rootReducer = combineReducers({
  user: useReducer,
});

const persisConfig = {
  key: "root",
  storage,
};

//새로고침시 데이터 날라가는거 방지
const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
