import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function PersonalInfo() {
  return (
    <div className="bg-white  w-full rounded-lg  px-8 py-2 border-2 ">
      <h3 className="font-semibold text-[18px] m-3">Personal Information</h3>
      <div className=" ">
        <div className="flex flex-col ">
          <div className="flex items-center ">
            <MapPin className="h-4 w-4 mr-2 " />
            <span className="">Mumbai</span>
          </div>
          <div className="flex items-center ">
            <Mail className="h-4 w-4 mr-2 " />
            <span className="">deepak@gmail.com</span>
          </div>
          <div className="flex items-center ">
            <Phone className="h-4 w-4 mr-2 " />
            <span className="">+91 7738586539</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex gap-2">
          <Link to="https://linkdin.com" >
            <FaLinkedin className="h-6 w-6  " />
          </Link>
          <Link to="https://linkdin.com">
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link to="https://linkdin.com">
            <FaXTwitter  className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
