import { useState, useEffect } from "react";
import profilePic from '../images/sushil1.png';

export default function Hero() {

  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsMenuOpen(false);
  };


  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#0A0C18] flex items-center px-6 md:px-20 py-20"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          {/* "Hello There!" with waving hand */}
          <div className="flex items-center gap-2 text-xl md:text-2xl font-medium mb-6">
            <span>Hello</span>
            <span className="inline-block animate-wave">👋</span>
            <span>There!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Creative
            <br />
            <span className="text-[#E76F51]">Designer</span> &
            <br />
            Digital Artist
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Transforming ideas into captivating visual experiences through innovative UI/UX design and creative solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("projects")} className="px-8 py-4 bg-[#E76F51] text-white rounded-full text-lg font-semibold italic hover:bg-[#d65f41] transition-colors flex items-center gap-3">
              View My Portfolio
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E76F51]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-[#E76F51] text-[#E76F51] rounded-full text-lg font-semibold italic hover:bg-[#E76F51] hover:text-white transition-colors">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-2 -left-5 w-32 h-32 rounded-full bg-[#E76F51] opacity-80"></div>
            <div className="absolute -bottom-2  right-8  w-24 h-24 rounded-full bg-[#F4A261] opacity-80"></div>
            
            {/* Main profile circle */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-8 border-[#E76F51] overflow-hidden bg-white">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
