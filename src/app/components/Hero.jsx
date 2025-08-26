import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center flex-grow text-white bg-transparent p-20"
    >
      <h2 className="text-4xl font-bold mb-4 transform transition-transform duration-700 ease-out hover:translate-y-[-5px]">
        Welcome to<span style = {{textShadow: "0 0 0px white, 0 0 2px white"}} className="relative animate-halo "> My</span> Website
      </h2>
      <p className="text-lg max-w-xl opacity-0 animate-fadeIn delay-300">
        This is a simple one-page site built with Next.js and TailwindCSS.
      </p>
    </section>
  );
};

export default Hero;
