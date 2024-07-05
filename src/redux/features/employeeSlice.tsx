// "use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type EmployeeState = {
  username: string;
  email: string;
  phone: string;
  password: string;
  employeeId: number;
  joiningDate: string;
  designation: string;
  employeeSalary: number;
};
const initialState: EmployeeState[] = [];

export const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeState>) => {
      return [...state, action.payload];
    },
  },
});

export const { addEmployee } = employee.actions;
export default employee.reducer;
