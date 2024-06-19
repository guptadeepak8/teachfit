import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './Slice/employeeSlice'
const store = configureStore({
  reducer: {
    employeeData: employeeReducer,
  },
})

export default store