import React from 'react';
import { MapPin, Clock, Briefcase, Users } from 'lucide-react';

export default function RecentJobs() {
  return (
    <div className="bg-white w-full rounded-lg p-5 border-2 shadow-lg">
      <h3 className="font-semibold text-3xl  text-slate-800 mb-3">Recent Jobs</h3>
      <div className="h-0.5 bg-slate-200 mt-3 mb-5"></div>
      <div className="flex  justify-center gap-5">
        <JobCard
          title="Math Professor"
          location="Mumbai"
          experience="0 years"
          type="Intern"
          applications="20 Applications"
          description="Responsible for teaching undergraduate and graduate students in mathematical concepts, theories, and applications."
        />
        <JobCard
          title="Science Professor"
          location="Mumbai"
          experience="2 years"
          type="Full-Time"
          applications="20 Applications"
          description="Teach and guide students in the understanding of scientific principles and methodologies."
        />
        <JobCard
          title="English Professor"
          location="Mumbai"
          experience="2 years"
          type="Full-Time"
          applications="20 Applications"
          description="Instruct students in English language and literature. Create engaging lesson plans and activities."
        />
      </div>
    </div>
  );
}

function JobCard({ title, location, experience, type, applications, description }) {
  return (
    <div className="w-80 bg-white hover:bg-blue-50 transition-colors duration-300 px-6 py-5 rounded-lg shadow-lg border border-gray-200">
      <div className="flex flex-col mb-4">
        <span className="font-bold text-lg text-gray-800">{title}</span>
        <span className="flex items-center text-sm text-gray-600"><MapPin className="mr-2 w-4 h-4" />{location}</span>
      </div>
      <div className="h-0.5 bg-blue-200 mb-4"></div>
      <div>
        <div className="flex flex-col font-semibold text-gray-700 mb-3">
          <span className="flex items-center text-sm"><Clock className="mr-1 w-4 h-4" />{experience}</span>
          <span className="flex items-center text-sm"><Briefcase className="mr-1 w-4 h-4" />{type}</span>
          <span className="flex items-center text-sm"><Users className="mr-1 w-4 h-4" />{applications}</span>
        </div>
        <div className="text-gray-600 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
}
