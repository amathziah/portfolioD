import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Import all images from src/images
import figmaImg from "../images/figma.png";
import aiImg from "../images/Ai.png";
import psImg from "../images/ps.png";
import idImg from "../images/id.png";

import brandingImg from "../images/b.png";
import uiuxImg from "../images/foldy.png";
import posterImg from "../images/pd.png";
import conceptArtImg from "../images/ca.png";
import photographyImg from "../images/photography.png";
import infographicsImg from "../images/GD.png";
import logoDesignImg from "../images/s.jpg";
import packagingImg from "../images/packaging.png";

export default function WorkAndProjects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const tools = [
    { name: "Figma", img: figmaImg, content: "95%" },
    { name: "Illustrator", img: aiImg, content: "97%" },
    { name: "Photoshop", img: psImg, content: "98%" },
    { name: "InDesign", img: idImg, content: "90%" },
  ];

  const allProjects = [
    { name: "Branding", img: brandingImg, path: "/projects/branding" },
    { name: "UI/UX Design", img: uiuxImg, path: "/projects/uiux" },
    { name: "Poster Design", img: posterImg, path: "/projects/poster" },
    { name: "Concept Art", img: conceptArtImg, path: "/projects/concept-art" },
    { name: "Photography", img: photographyImg, path: "/projects/photography" },
    { name: "Infographics", img: infographicsImg, path: "/projects/infographics" },
    { name: "Logo Design", img: logoDesignImg, path: "/projects/logo-design" },
    { name: "Packaging", img: packagingImg, path: "/projects/packaging" },
  ];

  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 4);

  return (
    <div className="bg-[#010312]">
      {/* My Work Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Work Skills
          </h2>
          <p className="text-lg md:text-xl mb-16 text-[#E76F51]">
            Exploring the Tools Behind My Design
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 justify-items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="relative w-[180px] sm:w-[200px] md:w-[220px] h-[360px] sm:h-[400px] md:h-[440px] bg-[#D9D9D9] rounded-[140px] flex flex-col items-center justify-between p-4 shadow-lg"
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-contain mt-4"
                />

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-4">
                  {tool.name}
                </h3>

                <div className="mb-4 w-full flex justify-center">
                  <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-[#E76F51] flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl">{tool.content}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Latest Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <div className="mb-4">
            <p className="text-[#E76F51] text-sm md:text-base mb-2">-My Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Latest <span className="text-[#E76F51]">Projects</span>
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto ${
              showAllProjects ? "gap-y-12" : ""
            }`}
          >
            {displayedProjects.map((project, index) => (
              <Link to={project.path} key={index}>
                <div className="relative w-full aspect-[3/4] rounded-[32px] border-2 border-[#E76F51] overflow-visible hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  {/* Project Name Header */}
                  <div className="absolute top-0 left-0 right-0 h-[80px] bg-[#0A0C18] rounded-t-[30px] border-b-2 border-[#E76F51] flex items-center justify-center z-10">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  </div>

                  {/* Layered Cards Background Effect */}
                  <div className="absolute top-[80px] left-0 right-0 bottom-0">
                    <div className="absolute top-0 left-[8%] right-[8%] bottom-[8%] bg-[#1a1f3a] rounded-t-[28px]"></div>
                    <div className="absolute top-[20px] left-[4%] right-[4%] bottom-[4%] bg-[#6b6b6b] rounded-t-[28px]"></div>
                    <div className="absolute top-[40px] left-0 right-0 bottom-0 bg-white rounded-t-[28px] flex items-center justify-center p-8 rounded-b-[30px]">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute -bottom-4 -right-4 z-20">
                    <div className="w-20 h-20 rounded-[32px] bg-[#0A0C18] border-2 border-[#E76F51] flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#E76F51] flex items-center justify-center hover:bg-[#d65f41] transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All / Show Less Button */}
          <div className="mt-12">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-[#E76F51] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#d65f41] transition-colors flex items-center justify-center gap-3 mx-auto"
            >
              {showAllProjects ? 'Show Less' : 'View All'}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E76F51]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
