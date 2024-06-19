import React, { useState } from 'react'
import clgImg from "/clg-logo.jfif";
import NavbarEmpolyee from '../components/OrgComponents/NavbarEmpolyee';

import OrgInfo from '../components/OrgComponents/OrgInfo';
import { SearchCheck, SquareUser } from 'lucide-react';
import PerksCulture from '../components/OrgComponents/PerksCulture';
import RecentJobs from '../components/OrgComponents/RecentJobs';
import DetailInfo from '../components/OrgComponents/DetailInfo';
import OrgAbout from '../components/OrgComponents/OrgAbout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Employee() {
  const about = useSelector((state) => state.employeeData.about)

const navigate=useNavigate()

  
function handleClick() {
  navigate('/orgform', { state: { about } });       
}

  return (
    <div className='min-h-screen bg-white '>
      <NavbarEmpolyee/>
      <div className=''>
        <div className='flex justify-between  px-8 py-3 bg-slate-800 items-center rounded-b-2xl'>
        <div className='flex items-center'>
         <img src={clgImg} className="w-32 h-32 object-cover rounded-full border bg-slate-400  mb-4 shadow-lg " />
         <div className='ml-10 flex flex-col'>
        {about && <span className='text-3xl font-bold text-white'>{about.name}</span>}
        <span className='text-white font-medium'>Mumbai | India</span> 
        <button onClick={handleClick}>Update</button>
         </div>
        </div>
        
        </div>
        {/* <div className="h-0.5 bg-slate-200 mt-3 px-5"></div> */}
       <div className='flex mx-8 gap-5 mb-5  px-8 py-4 '>
       <div className=" w-1/4 flex flex-col gap-4 ">
          <OrgInfo about={about}/>
          </div>
          <div className="overflow-y-auto  scroll-smooth  w-3/4  h-screen no-scrollbar flex flex-col gap-2">
          <DetailInfo/>
          <OrgAbout/>
           
            <RecentJobs/>
          </div>
       </div>
       

      </div>
    </div>
  )
}
