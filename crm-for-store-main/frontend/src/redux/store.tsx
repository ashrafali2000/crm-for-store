// "use client";

import { configureStore } from "@reduxjs/toolkit";
import LeadReducer from "@/redux/features/leadSlice";
import ClientReducer from "@/redux/features/clientSlice";
import ProjectReducer from "@/redux/features/projectSlice";
import EmployeeReducer from "@/redux/features/employeeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  lead: LeadReducer,
  client: ClientReducer,
  project: ProjectReducer,
  employee: EmployeeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
