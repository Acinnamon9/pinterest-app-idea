import React from "react";

const About = () => {
  return (
    <section id="about" className="p-20 bg-gray-200 opacity-90 text-blue-950">
      <h2 className="text-3xl font-semibold mb-4 ">About</h2>
      <p className="max-w-2xl">
        Here you can write something about yourself, your product, or your idea.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4 max-w-screen mx-1  " >
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold text-xl mb-2">Feature Title</h3>
          <p className="text-gray-700">
            Short description of your feature or project.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold text-xl mb-2">Feature Title</h3>
          <p className="text-gray-700">
            Short description of your feature or project.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h3 className="font-semibold text-xl mb-2">Feature Title</h3>
          <p className="text-gray-700">
            Short description of your feature or project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
