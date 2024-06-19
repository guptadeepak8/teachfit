import React from 'react';
import SectionCard from '../ui/sectionCard';
import Line from '../ui/Line';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function EmployeeTable() {
  return (
    <div className='mt-4'>
      <h3 className="font-semibold text-3xl text-slate-800 my-2">Employees</h3>
      <Line />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Photo</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">LinkedIn URL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-12 h-12 object-cover rounded-full" alt="John Doe" />
              </div>
            </td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">john.doe@example.com</td>
            <td className="px-4 py-2">
              <Link to="https://www.linkedin.com/in/johndoe">
                <FaLinkedin className="h-6 w-6 text-blue-600 mx-auto" />
              </Link>
            </td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-12 h-12 object-cover rounded-full" alt="Jane Smith" />
              </div>
            </td>
            <td className="px-4 py-2">Jane Smith</td>
            <td className="px-4 py-2">jane.smith@example.com</td>
            <td className="px-4 py-2">
              <Link to="https://www.linkedin.com/in/janesmith">
                <FaLinkedin className="h-6 w-6 text-blue-600 mx-auto" />
              </Link>
            </td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-12 h-12 object-cover rounded-full" alt="Jane Smith" />
              </div>
            </td>
            <td className="px-4 py-2">Jane Smith</td>
            <td className="px-4 py-2">jane.smith@example.com</td>
            <td className="px-4 py-2">
              <Link to="https://www.linkedin.com/in/janesmith">
                <FaLinkedin className="h-6 w-6 text-blue-600 mx-auto" />
              </Link>
            </td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-12 h-12 object-cover rounded-full" alt="Jane Smith" />
              </div>
            </td>
            <td className="px-4 py-2">Jane Smith</td>
            <td className="px-4 py-2">jane.smith@example.com</td>
            <td className="px-4 py-2">
              <Link to="https://www.linkedin.com/in/janesmith">
                <FaLinkedin className="h-6 w-6 text-blue-600 mx-auto" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
