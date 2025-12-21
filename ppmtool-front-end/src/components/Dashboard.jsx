import React from 'react'
import { ProjectItem } from './Project/ProjectItem'

export const Dashboard = () => {
  return (
  <div className="projects">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex">
        <div className="w-full">

          {/* Page Title */}
          <h1 className="text-4xl font-light text-center mt-5 mb-6">
            Projects
          </h1>

          {/* Create Button */}
          <div className="text-center mb-6">
            <a
              href="ProjectForm.html"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium px-6 py-3 rounded-lg transition"
            >
              Create a Project
            </a>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 mb-6" />

          {/* Project Items */}
          <ProjectItem />

        </div>
      </div>
    </div>
  </div>
  )
}
