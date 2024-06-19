import { Bell, User } from "lucide-react";
import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function NavbarEmpolyee() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <nav className="  shadow-lg ">
    <div className="flex flex-row justify-around items-center bg-white p-3">
      <div className="flex items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <div className="ml-2">
        <div className="flex space-x-4 font-medium">
          <Link
            to="/"
            className="text-slate-500  hover:bg-blue-400 py-2 px-4 rounded-2xl hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-slate-500 hover:bg-blue-400 py-2 px-4 rounded-2xl hover:text-white "
          >
            Posted Jobs
          </Link>
          <Link
            to="/"
            className="text-slate-500 hover:bg-blue-400 py-2 px-4 rounded-2xl hover:text-white "
          >
            Applicants
          </Link>
          <Link
            to="/"
            className="text-slate-500 hover:bg-blue-400 py-2 px-4 rounded-2xl hover:text-white "
          >
            Shortlisted
          </Link>
         
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button className="relative p-2 text-slate-500  hover:rounded-full hover:bg-blue-500 hover:text-white">
          <Bell className="h-6 w-6" />
          <span className="absolute top-3 right-4 inline-flex items-center justify-center px-1 py-1 font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></span>
        </button>
        <div className="relative z-30 ml-10">
          <button onClick={handleToggle} className="p-2 text-slate-500  hover:rounded-full hover:bg-blue-500 hover:text-white">
           <User/>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20 border">
              <Link
             to='/'
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={handleClose}
              >
                Profile
              </Link>
              <Link
                to='/'
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                onClick={handleClose}
              >
                Sign Out
              </Link>
            </div>
          )}
          {isOpen && (
            <div className="fixed inset-0" onClick={handleClose}></div>
          )}
        </div>
      </div>
    </div>
  </nav>
  )
}
