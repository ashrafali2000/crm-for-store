// "use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProjectState = {
  projectName: string;
  client: string;
  startDate: string;
  endDate: string;
  amount: string;
  priority:string
  projectLeader: string;
  teamMember: string;
  description: string;
  uploadFile: File | null;
};
const initialState: ProjectState[] = [];

export const project = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectState>) => {
      return [...state, action.payload];
    },
  },
});
export const { addProject } = project.actions;
export default project.reducer;
