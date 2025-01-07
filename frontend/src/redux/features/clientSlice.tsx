// "use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type ClientState = {
  clientName: string;
  email: string;
  phone: string;
  country: string;
  clientId: string;
};
const initialState: ClientState[] = [];

export const client = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClient: (state, action: PayloadAction<ClientState>) => {
      return [...state, action.payload];
    },
  },
});
export const { addClient } = client.actions;
export default client.reducer;
