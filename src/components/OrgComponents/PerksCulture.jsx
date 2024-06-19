import { CheckCircle, Users, Coffee, Heart } from "lucide-react";
import React from "react";

export default function PerksCulture() {
  return (
    <div className="mt-5">
      <h3 className=" font-semibold text-3xl  text-slate-800 mb-2">Perks and Culture</h3>
      <div className="h-0.5 bg-slate-200 mt-3 px-5"></div>
      <ul className="list-disc pl-6 mt-2">
        <li className="flex items-start gap-2 mb-2">
          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
          <span>
            <strong>Health Insurance:</strong> Comprehensive health insurance plans for employees and their families.
          </span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <Users className="h-5 w-5 text-blue-500 mt-1" />
          <span>
            <strong>Team Outings:</strong> Regular team outings and activities to foster team bonding.
          </span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <Coffee className="h-5 w-5 text-brown-500 mt-1" />
          <span>
            <strong>Free Snacks and Beverages:</strong> A variety of free snacks and beverages available in the office.
          </span>
        </li>
        <li className="flex items-start gap-2 mb-2">
          <Heart className="h-5 w-5 text-red-500 mt-1" />
          <span>
            <strong>Employee Wellness Programs:</strong> Programs and resources to support employee health and well-being.
          </span>
        </li>
      </ul>
    </div>
  );
}
