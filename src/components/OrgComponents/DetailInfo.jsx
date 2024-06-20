import React from "react";
import SectionCard from "../ui/sectionCard";
import { SearchCheck, SquareUser } from 'lucide-react';
import Line from "../ui/Line";
export default function DetailInfo() {
  return (
    
      <div className="flex  gap-3 m-2">
        <DetailInfoCards text='Job Posted' number='100'  icon={SearchCheck}/>
        <DetailInfoCards text='Job Applicants' number='2303'  icon={SquareUser}/>
        <DetailInfoCards text='Success Hired' number='250'   icon={SearchCheck}/>
      </div>

  );
}


function DetailInfoCards({ text, number, classNames,icon:Icon }) {
  return (
    <div className={`flex flex-col  rounded-2xl  items-center justify-center w-72 border-2  text-slate-700 shadow-lg `}>
      <div className="flex gap-2 items-center text-center w-full justify-center bg-slate-200 rounded-t-2xl px-2 py-2">
      <Icon className="h-10 w-10 text" />
        <span className="font-semibold text-xl">{text}</span>
      </div>
      <div className="w-full h-0.5 bg-slate-300  px-5"></div>
      <span className="font-semibold text-2xl my-2">{number}</span>
    </div>
  );
}