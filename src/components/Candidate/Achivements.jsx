import React from "react";
import clgImg from "/clg-logo.jfif";

export default function Achivements() {
  return (
    <div className="bg-white rounded-lg border-2 mb-5">
       <div className="flex justify-between items-center mx-10 my-4">
        <h3 className="font-semibold text-2xl  text-slate-800">
          Achivements
        </h3>

        <button className="border-2 border-emerald-500 px-4 py-1 rounded-full hover:bg-emerald-400 hover:text-white">
          Add
        </button>
      </div>
      <div className="px-7">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="flex flex-col flex-grow">
              <span className="font-medium">
                Mumbai Institute of Technology
              </span>
              <span>Received Excellence in Mathematics Award</span>
              <span className="text-13">
                Recognized for outstanding performance in Mathematics
              </span>
              <div class="h-0.5 bg-gray-200 mt-4"></div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col flex-grow">
              <span className="font-medium">University of Mumbai</span>
              <span>Awarded Best Student in Applied Mathematics</span>
              <span className="text-13 mb-3">
                Recognized for academic excellence and leadership
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
