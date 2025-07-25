import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  return (
    <footer
      id="contact"
      className={`py-8 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} relative`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          darkMode ? 'from-black via-white to-black' : 'from-white via-black to-white'
        }`}
      ></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="font-['Bebas_Neue'] text-2xl mb-2">CODER'S CAFE</div>
            <p className="text-sm opacity-70">© 2025 Coder's Cafe</p>
          </div>

          <div className="flex space-x-6">
            <SocialIcon
              href="https://linkedin.openinapp.link/9yhs0"
              icon={<Linkedin size={24} />}
            />
            <SocialIcon
              href="https://www.instagram.com/coderscafe_jec?igsh=eWplM3o2ZjE4amdn"
              icon={<Instagram size={24} />}
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <FooterLink href="https://kuldeep-creates.github.io/CODER-S-CAFE/" darkMode={darkMode}>
              Home
            </FooterLink>
            <FooterLink to="/about-us" darkMode={darkMode}>
              About Us
            </FooterLink>
            <FooterLink
              href="https://jeckukas.org.in/"
              darkMode={darkMode}
              external
            >
              College
            </FooterLink>
            <FooterLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=coders.cafe.jec@gmail.com"
              darkMode={darkMode}
              external
            >
              Contact
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social icon button
const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:opacity-80"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

// Footer link component (internal + external)
const FooterLink = ({ href, to, children, external = false, darkMode }) => {
  const baseClass =
    'text-sm transition-opacity duration-200 hover:opacity-100' +
    ` ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} opacity-70`;

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={baseClass}>
      {children}
    </a>
  );
};

export default Footer;
