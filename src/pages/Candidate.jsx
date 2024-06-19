import React, { useState } from "react";
import PersonalInfo from "../components/Candidate/PersonalInfo";
import Experince from "../components/Candidate/Experience";
import Education from "../components/Candidate/Education";
import Achivements from "../components/Candidate/Achivements";
import Skills from "../components/Candidate/Skills";
import About from "../components/Candidate/About";
import NavbarProfile from "../components/Candidate/NavbarProfile";
import { Link } from "react-router-dom";
 
export default function Candidate() {

  const [owner,setOwner]=useState(true);
  return (
    <div className="">
      <NavbarProfile/>
       <div className="relative bg-slate-200 h-24 rounded-b-3xl " >
      <div className="absolute bottom-0 left-36 transform translate-y-1/2 ">
      <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-32 h-32 object-cover rounded-full  mx-auto mb-4  border-white border-4" />
      </div>
    </div>
    <div className="flex justify-between items-center mt-16 mb-6 px-6">
      <div className="ml-[120px] text-center">   
        <h2 className="text-2xl font-bold">Ronnie Torres</h2>
        <p className="text-gray-600">Math Prof.</p>
      </div>
      <div className="flex items-center gap-3">

        <button className=" bg-blue-500 text-white px-4 py-2 rounded-2xl font-semibold">Resume</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl font-semibold">Share</button>
        {owner && <Link to='/Jobform' className="bg-blue-500 text-white px-4 py-2 rounded-2xl font-semibold">Update</Link>}
      </div>
    </div>
      <div className="flex  mx-8 gap-5">
        
        <div className=" w-1/4  ">
        <div className="flex flex-col gap-3">
         <PersonalInfo />
         <Skills/>

        </div>
         
        </div>
        <div className="overflow-y-auto  scroll-smooth  w-3/4  h-screen no-scrollbar">
          <div className="flex flex-col gap-3 overflow-y-auto ">
            <About/>
            <Experince/>
            <Education/>
            <Achivements/>
          </div>
        </div>
      </div>
    </div>
  );
}
