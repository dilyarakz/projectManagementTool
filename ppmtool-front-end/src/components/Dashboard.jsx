import React from 'react'
import { ProjectItem } from './Project/ProjectItem'
import CreateProjectButton from './Project/CreateProjectButton'


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
            <CreateProjectButton/>

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
