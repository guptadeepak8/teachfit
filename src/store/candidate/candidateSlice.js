// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    yearsofexp: "",
    skills: [],
    languages: [],
    facebooklinks: "",
    twitterlinks: "",
    linkedinlinks: "",
    photo: null,
   education: [
    {
      id: 1,
      institute: "",
      degree: "",
      cgpa: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      saved: false,
    },
  ],
  experience: [
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      saved: false,
    },
  ],
  achivement: [
    {
      id: 1,
      institute: "",
      award: "",
      description: "",
    },
  ],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    setLinks: (state, action) => {
      state.links = { ...state.links, ...action.payload };
    },
    setCurrentSkill: (state, action) => {
      state.currentSkill = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
    addEducation: (state) => {
      state.education.push({
        id: state.education.length + 1,
        institute: "",
        degree: "",
        cgpa: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        saved: false,
      });
    },
    updateEducation: (state, action) => {
      const { index, data } = action.payload;
      state.education[index] = { ...state.education[index], ...data };
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter((edu, i) => i !== action.payload);
    },
    addExperience: (state) => {
      state.experience.push({
        id: state.experience.length + 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        saved: false,
      });
    },
    updateExperience: (state, action) => {
      const { index, data } = action.payload;
      state.experience[index] = { ...state.experience[index], ...data };
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter((exp, i) => i !== action.payload);
    },
    removeAchivement: (state, action) => {
      state.achivement = state.achivement.filter((ach, i) => i !== action.payload);
    },
    setDeliveryMode: (state, action) => {
      state.deliveryMode = action.payload;
    },
  },
});

export const {setPersonalInfo,setLinks,setCurrentSkill,setLang,setPhoto,addEducation,updateEducation,removeEducation,
addExperience,updateExperience,removeExperience,removeAchivement,setDeliveryMode,} = formSlice.actions;

export default formSlice.reducer;
