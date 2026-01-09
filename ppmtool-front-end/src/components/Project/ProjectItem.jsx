import React from 'react'

export const ProjectItem = () => {
  return (
  <div className="max-w-6xl mx-auto px-4">
    <div className="bg-gray-100 rounded-lg shadow-sm p-6 mb-3">
      <div className="flex flex-wrap items-start">

        {/* Left column */}
        <div className="w-2/12 flex justify-center">
          <span className="font-semibold">REACT</span>
        </div>

        {/* Middle column */}
        <div className="w-8/12 md:w-4/12 lg:w-6/12 px-2">
          <h3 className="text-xl font-semibold">Spring / React Project</h3>
          <p className="text-gray-700">
            Project to create a Kanban Board with Spring Boot and React
          </p>
        </div>

        {/* Right column (hidden on small screens) */}
        <div className="hidden lg:block w-4/12">
          <ul className="border rounded-lg divide-y bg-white">
            <a href="#" className="block hover:bg-gray-100">
              <li className="px-4 py-2 flex items-center text-blue-600">
                <i className="fa fa-flag-checkered mr-2" />
                Project Board
              </li>
            </a>

            <a href="#" className="block hover:bg-gray-100">
              <li className="px-4 py-2 flex items-center text-green-600">
                <i className="fa fa-edit mr-2" />
                Update Project Info
              </li>
            </a>

            <a href="#" className="block hover:bg-gray-100">
              <li className="px-4 py-2 flex items-center text-red-600">
                <i className="fa fa-minus-circle mr-2" />
                Delete Project
              </li>
            </a>
          </ul>
        </div>

      </div>
    </div>
  </div>

  )
}
