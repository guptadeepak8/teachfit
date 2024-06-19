import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about:null
}

const employeeSlice = createSlice({
  name: "empolyeeData",
  initialState,
  reducers: {
    updateAbout(state, action) {
     state.about = action.payload;
     console.log(state.about,action.payload)
    },
    fetchAbout(state,action){
      state.about = action.payload;
    }
  },
});

export const { updateAbout,fetchAbout  } = employeeSlice.actions
export default employeeSlice.reducer