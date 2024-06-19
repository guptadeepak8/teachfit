import React from "react";
import SectionCard from "../ui/sectionCard";
import { SearchCheck, SquareUser } from 'lucide-react';
export default function DetailInfo() {
  return (
    
      <div className="flex gap-3 m-2">
        <DetailInfoCards text='Job Posted' number='100' classNames='bg-blue-200' icon={SearchCheck}/>
        <DetailInfoCards text='Job Applicants' number='2303' classNames='bg-red-200'  icon={SquareUser}/>
        <DetailInfoCards text='Success Hired' number='250' classNames='bg-green-300'  icon={SearchCheck}/>
      </div>

  );
}


function DetailInfoCards({ text, number, classNames,icon:Icon }) {
  return (
    <div className={`flex flex-col ${classNames} px-2 py-2 rounded-2xl gap-2 items-center justify-center w-60`}>
      <div className="flex gap-2 items-center text-center">
      <Icon className="h-10 w-10 text" />
        <span className="font-semibold text-2xl">{text}</span>
      </div>
      <span className="font-semibold text-4xl">{number}</span>
    </div>
  );
}