import { Briefcase, Calendar, Link2, Linkedin, Mail, MapPin, Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Line from "../ui/Line";
import SectionCard from "../ui/sectionCard";


export default function OrgInfo({about}) {
  return (
    <SectionCard>
      <h3 className="font-semibold text-2xl my-2">Information</h3>
      <Line/>
      <div className="mt-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center ">
            <MapPin className="h-5 w-5 mr-2 " />
            <span className="text-lg font-medium">{about.location}</span>
          </div>
          <div className="flex items-center ">
            <Mail className="h-5 w-5 mr-2 " />
             <span className="text-lg font-medium">{about.email}</span>
          </div>
          <div className="flex items-center ">
            <Phone className="h-5 w-5 mr-2 " />
            <span className="text-lg font-medium">{about.phoneNo}</span>
          </div>
          <div className="flex items-center ">
            <Link2 className="h-5 w-5 mr-2 " />
            <span className="text-lg font-medium">{about.collegeUrl}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span className="text-lg font-medium">{about.noOfEmployess} Employees</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 mr-2" />
            <span className="text-lg font-medium">{about.typeoforg} College</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-lg font-medium">Established in {about.establishedIn}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
       
        <div className="flex gap-2">
        <Link to={about.Linkedin} >
            <FaLinkedin className="h-8 w-8  text-blue-600" />
          </Link>
          <Link to={about.facebook}>
            <FaFacebook className="h-8 w-8 text-blue-400" />
          </Link>
          <Link to={about.twitter}>
            <FaXTwitter  className="h-8 w-8 text-black" />
          </Link>
        </div>
      </div>
    </SectionCard>
  );
}
