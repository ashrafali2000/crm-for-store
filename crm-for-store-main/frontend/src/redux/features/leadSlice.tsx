// "use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: LeadState;
};
type LeadState = {
  leadName: string;
  email: string;
  phone: string;
  country: string;
  employeeName: string;
};
const initialState: LeadState[] = [];

export const lead = createSlice({
  name: "lead",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<LeadState>) => {
      return [...state, action.payload];
    },
  },
});
export const { addLead } = lead.actions;
export default lead.reducer;
