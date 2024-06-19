import React from 'react'

export default function Skills() {
  return (
    <div className='bg-white  w-full rounded-lg  px-8 py-2 border-2 '>
      <div className="mt-3">
            <span className="font-bold">Skills</span>
            <div className="flex gap-1 mt-2">
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
                Algerbra
              </span>
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
                Geomerty
              </span>
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
                Calculs
              </span>
            </div>
          </div>
          <div className="mt-3">
            <span className="font-bold">languages</span>
            <div className="flex gap-1 mt-2">
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
                Hindi
              </span>
              <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-md font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
                English
              </span>
            </div>
          </div>
    </div>
  )
}
