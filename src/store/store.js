import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './Slice/employeeSlice'
import candidateReducer from './candidate/candidateSlice'
const store = configureStore({
  reducer: {
    employeeData: employeeReducer,
    candidateData: candidateReducer,
  },
})

export default store