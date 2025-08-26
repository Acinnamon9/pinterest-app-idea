import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="p-20 bg-white opacity-85 text-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">You can reach me at: <span className="font-mono">email@example.com</span></p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Get in Touch
        </button>
      </section>
  )
}

export default Contact