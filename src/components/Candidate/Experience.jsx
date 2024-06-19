import React from "react";
import clgImg from "/clg-logo.jfif";
import { Plus } from "lucide-react";
export default function Experince() {
  return (
    <div className="bg-white  rounded-lg  border-2">
      <div className="flex justify-between items-center mx-10 my-4">
      <h3 className="font-semibold text-2xl  text-slate-800">
        Experience
      </h3>
     
      {/* <button className="border-2 border-emerald-500 px-4 py-1 rounded-full hover:bg-emerald-400 hover:text-white">Add</button> */}
      </div>
      <div class="h-0.5 bg-slate-200 mt-4 mx-8"></div>
      <div className="px-7 py-2">
        <div className="flex flex-col gap-5 mb-3 ">
          <div className="flex flex-row gap-10 ">
            <img
              src={clgImg}
              className="w-16 h-16 object-cover rounded-sm  bg-slate-400 "
            />
            <div className="flex flex-col flex-grow">
              <span className="font-medium">
                Universal College of Enginnering
              </span>
              <span>Applied Mathematics prof.</span>
              <span className="text-[13px]">Apr 2018-present | Mumbai</span>
              <div class="h-0.5 bg-slate-200 mt-4"></div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <img
              src={clgImg}
              className="w-16 h-16 object-cover rounded-sm  bg-slate-400 "
            />
            <div className="flex flex-col">
              <span className="font-medium">Jr College of Enginnering</span>
              <span>Algebra prof.</span>
              <span className="text-[13px]">Apr 2016-May 2018 | Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
