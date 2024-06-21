// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
   
  skills: [],
  languages: [],
   education: [
    {
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
      title: "",
      description: "",
      date: "",
    },
  ],
}
};

const formSlice = createSlice({
  name: 'candidateData',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = {...state.personalInfo,...action.payload}
    },
    updateSkills: (state, action) => {
      state.personalInfo.skills = action.payload;
    },
    updateLanguages: (state, action) => {
      state.personalInfo.languages = action.payload;
    },
    addEducation(state, action) {
      state.personalInfo.education.push(action.payload);
    },
    saveEducation(state, action) {
      const { index, education } = action.payload;
      state.personalInfo.education[index] = education;
    },
    removeEducation(state, action) {
      state.personalInfo.education.splice(action.payload, 1);
    },
    addExperience(state, action) {
      state.personalInfo.experience.push(action.payload);
    },
    saveExperience(state, action) {
      const { index, experience } = action.payload;
      state.personalInfo.experience[index] = experience;
    },
    removeExperience(state, action) {
      state.personalInfo.experience.splice(action.payload, 1);
    },
    addAchievement(state, action) {
      state.personalInfo.achivement.push(action.payload);
    },
    saveAchievement(state, action) {
      const { index, achivement } = action.payload;
      state.personalInfo.achivement[index] = achivement;
    },
    removeAchievement(state, action) {
      state.personalInfo.achivement.splice(action.payload, 1);
    },
  },
});

export const {updatePersonalInfo,updateSkills,updateLanguages,addEducation,saveEducation,removeEducation,addExperience,saveExperience,removeExperience,addAchievement,saveAchievement,removeAchievement} = formSlice.actions;

export default formSlice.reducer;
