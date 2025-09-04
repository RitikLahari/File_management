import React from 'react'
import { Link } from 'react-router-dom'

const LearnMore = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Learn More</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Our platform helps you securely upload, store, and organize your files.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Back to Home
      </Link>
    </div>
  )
}

export default LearnMore
