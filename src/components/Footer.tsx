import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF size={16} />, href: '#' },
    { icon: <FaInstagram size={16} />, href: '#' },
    { icon: <FaBehance size={16} />, href: '#' },
    { icon: <FaLinkedinIn size={16} />, href: '#' },
  ];

  return (
    <footer className="bg-[#F5F5F5] relative py-2">
      <div className="container mx-auto px-6 flex justify-end">
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] bg-[#E76F51] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
