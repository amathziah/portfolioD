export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0A0C18]">
      <div className="container mx-auto px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Create an <span className="text-[#E76F51]">Amazing</span>
            <br />
            <span className="text-[#E76F51]">Project</span> Together!
          </h2>
          <p className="text-2xl md:text-3xl text-white mt-12">
            Let's <span className="text-[#E76F51] italic">Connect</span> Here!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
          {/* Personal Info with Logo */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#E76F51] flex items-center justify-center">
                <span className="text-white text-2xl font-bold italic">S</span>
              </div>
              <span className="text-[#E76F51] text-3xl font-semibold italic">Sushil</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              I'm a Graphic and user-centered Designer skilled in branding and digital media. 
              Passionate about storytelling and collaboration, I create designs that drive meaningful social impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-white hover:text-[#E76F51] transition-colors cursor-pointer">
                <span className="text-[#E76F51]">▶</span>
                <span className="text-lg">Home</span>
              </li>
              <li className="flex items-center gap-2 text-white hover:text-[#E76F51] transition-colors cursor-pointer">
                <span className="text-[#E76F51]">▶</span>
                <span className="text-lg">About Me</span>
              </li>
              <li className="flex items-center gap-2 text-white hover:text-[#E76F51] transition-colors cursor-pointer">
                <span className="text-[#E76F51]">▶</span>
                <span className="text-lg">Projects</span>
              </li>
              <li className="flex items-center gap-2 text-white hover:text-[#E76F51] transition-colors cursor-pointer">
                <span className="text-[#E76F51]">▶</span>
                <span className="text-lg">Services</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E76F51] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                </svg>
                <span className="text-lg">+91 7458078246</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E76F51] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                </svg>
                <span className="text-lg break-all">sushil.k22ug@learner.rishihood.edu.in</span>
              </div>
            </div>
          </div>

          {/* Latest Updates / Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Latest Updates</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-6 py-4 rounded-full bg-[#E76F51] text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-[#d65f41]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-[#E76F51]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}