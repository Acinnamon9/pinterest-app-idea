"use client"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop/docHeight)* 100;
      setProgress(scrolled);
    }

    window.addEventListener("scroll", handleScroll);
    return()=>window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white sticky top-0 z-50">
      
      <h1 className="text-xl font-bold">MySite</h1>
      <ul className="flex gap-6">
        {["hero", "about", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`hover:text-gray-300 relative group text-white  ${
                active === id ? "text-blue-400" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-200 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
      <div className = "fixed top-0 left-0 h-1 bg-blue-500 z-50" style = {{width:  `${progress}%`}} />
    </nav>
  );
}
