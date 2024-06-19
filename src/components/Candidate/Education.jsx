import React from "react";
import clgImg from "/clg-logo.jfif";
export default function Education() {
  return (
    <div className="bg-white  rounded-lg border-2">
      <div className="flex justify-between items-center mx-10 my-4">
        <h3 className="font-semibold text-2xl  text-slate-800">
          Education
        </h3>

       
      </div>
      <div class="h-0.5 bg-slate-200 mt-4 mx-8"></div>
      <div className="px-7 py-2 ">
        <div className="flex flex-col gap-5 mb-3 ">
          <div className="flex flex-row gap-10 ">
            <img
              src={clgImg}
              className="w-16 h-16 object-cover rounded-sm  bg-slate-400 "
            />
            <div className="flex flex-col flex-grow">
              <span className="font-medium">
                {" "}
                Mumbai Institute of Technology
              </span>
              <span> Mathematics-1</span>
              <span className="text-[13px]">Sep 2016 - Present | Mumbai</span>
              <span className="text-[13px]">
                Doctor of Philosophy (Ph.D.) in Mathematics
              </span>
              <div class="h-0.5 bg-slate-200 mt-4"></div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <img
              src={clgImg}
              className="w-16 h-16 object-cover rounded-sm  bg-slate-400 "
            />
            <div className="flex flex-col">
              <span className="font-medium">University of Mumbai</span>
              <span>Mathematics</span>
              <span className="text-[13px]">Aug 2014 - May 2016 | Mumbai</span>
              <span className="text-[13px]">
                Master of Science in Applied Mathematics
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
