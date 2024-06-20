import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about: {
    name: '',
    email: '',
    phoneNo: '',
    collegeUrl: '',
    typeoforg: '',
    noOfEmployees: '',
    establishedIn: '',
    location: '',
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    orgdes: '',
    employees: [
      {
        Ename: '',
        Eemail: '',
        Elinkedin: '',
      },
    ],
  },
};

const employeeSlice = createSlice({
  name: 'employeeData',
  initialState,
  reducers: {
    updateAbout(state, action) {
      state.about = { ...state.about, ...action.payload };
    },
    addEmployee(state, action) {
      state.about.employees.push(action.payload);
    },
    saveEmployee(state, action) {
      const { index, employee } = action.payload;
      state.about.employees[index] = employee;
    },
    removeEmployee(state, action) {
      state.about.employees.splice(action.payload, 1);
    },
  },
});

export const { updateAbout, addEmployee, saveEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
