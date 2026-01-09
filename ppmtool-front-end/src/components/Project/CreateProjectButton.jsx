import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <div className="text-center mb-6">
               <Link
                to='/addProject'
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium px-6 py-3 rounded-lg transition"
            >
                Create a Project
            </Link>
            </div>
           
      </React.Fragment>
    
  )
}

export default CreateProjectButton