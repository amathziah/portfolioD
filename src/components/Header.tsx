import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about me", "projects", "services", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          if (window.scrollY >= top) current = section;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsMenuOpen(false);
  };

  const navLinks = ["home", "about me", "projects", "services"];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] h-[70px] z-50">
      <div className="absolute w-full h-full bg-white rounded-[35px] shadow-md flex items-center px-6 justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[55px] h-[55px] bg-[#E76F51] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h1 className="font-redressed text-[50px] text-[#E76F51] leading-[60px]">
            Sushil
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative text-[20px] font-medium leading-[30px] text-[#010312] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E76F51] after:block after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
            >
              {section === "about me"
                ? "About Me"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        {/* Right: Contact & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block w-[160px] h-[55px] bg-[#E76F51] rounded-[200px] text-white text-[20px] font-medium"
          >
            Contact Me
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white rounded-b-[35px] shadow-md flex flex-col items-center py-4 gap-4 z-40">
          {[...navLinks, "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-[20px] font-medium ${active === section ? "text-[#E76F51]" : "text-[#010312]"
                }`}
            >
              {section === "about me"
                ? "About Me"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}





