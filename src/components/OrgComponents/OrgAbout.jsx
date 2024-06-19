import React from 'react'
import PerksCulture from './PerksCulture'
import SectionHeading from '../ui/SectionHeading'
import EmployeeTable from './EmployeeTable'

export default function OrgAbout({about}) {
  return (
    <div className="flex flex-col bg-white  rounded-lg  px-8 py-2 border-2 ">
    
      <h3 className="font-semibold text-3xl  text-slate-800 my-2">
        About
      </h3>
      
      <div className="h-0.5 bg-slate-200 mt-3 px-5"></div>
      <span className='text-lg py-3 px-5 font-semibold text-slate-800'>

      Universal College of Engineering is a prestigious institution offering diverse programs and fostering a culture of excellence. With state-of-the-art facilities and a commitment to student success, we provide a nurturing environment that encourages academic and personal growth.
      </span>
       <PerksCulture about={about}/>
       <EmployeeTable about={about}/>
  </div>
  )
}
