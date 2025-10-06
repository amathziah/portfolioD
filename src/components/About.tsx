export default function About() {
  return (
    <section
      id="about me"
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 py-20 px-6 md:px-20 bg-[#0b0b12] overflow-hidden"
    >
      {/* ===== LEFT SIDE (PHOTO + CLEAN ABSTRACT LAYERS) ===== */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Background abstract shapes */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          {/* Soft gradient circles behind image */}
          <div className="absolute w-[320px] h-[320px] bg-[#E76F51] rounded-full opacity-30"></div>
          <div className="absolute w-[360px] h-[360px] bg-[#FFC876] rounded-full opacity-20 top-6 left-6"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#B37A5A] rounded-full opacity-15 -bottom-8 -right-8"></div>
        </div>

        {/* Main profile image */}
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl border-[6px] border-[#0b0b12] z-10">
          <img
            src="src/images/sushilp1.png"
            alt="Sushil Kumar"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* ===== RIGHT SIDE (TEXT CONTENT) ===== */}
      <div className="w-full md:w-1/2 text-center md:text-left text-white relative z-10">
        <h3 className="text-[#E76F51] font-semibold mb-2">– About Me</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Who is <span className="text-[#E76F51]">Sushil Kumar?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          I am a 4th-year{" "}
          <span className="font-semibold">Communication Design</span> student
          at <span className="font-semibold">Rishihood University</span> who
          specializes in graphic and user-centered design. I am proficient in{" "}
          <span className="font-semibold">Adobe Creative Suite</span> and have
          prior expertise in branding and digital media. I am enthusiastic
          about storytelling and teamwork, and I hope to use my creativity to
          create a great impact on society through design.
        </p>

        {/* Download CV Button */}
        <a
          href="https://in.docworkspace.com/d/sIMbG4uqpAqOY1cMG?sa=601.1037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#E76F51] hover:bg-[#d96443] text-white text-lg font-semibold rounded-full shadow-lg transition-colors"
        >
          <span className="text-center leading-tight">Download My CV</span>
          <span className="inline-flex items-center justify-center w-8 h-8 bg-white text-[#E76F51] rounded-full shadow-sm">
            ▶
          </span>
        </a>
      </div>
    </section>
  );
}



