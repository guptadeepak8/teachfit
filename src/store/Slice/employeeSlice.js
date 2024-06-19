import { Update } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about:{
    employee:[]
  }
}

const employeeSlice = createSlice({
  name: "empolyeeData",
  initialState,
  reducers: {
    updateAbout(state, action) {
     state.about = action.payload;
     console.log(state.about,action.payload)
    },
    addEmployee(state,action){
      state.about.employee.push(action.payload)
    },
  },
});

export const { updateAbout } = employeeSlice.actions
export default employeeSlice.reducer