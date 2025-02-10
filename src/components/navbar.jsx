import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="m-0 p-0">
      {/* Sticky Navbar bleibt oben */}
      <nav className="font-bell h-auto bg-black bg-opacity-50 w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4 lg:px-10 lg:py-2 xl:px-20">
          {/* Logo + Name */}
          <a href="#" className="flex items-center">
            <img
              src="./img/logo_navbar.png"
              alt="Logo"
              className="rounded-full h-16 w-16 mr-3 transform hover:scale-110 transition-transform duration-300"
            />
            <span className="text-white text-xl font-semibold">Kraut & Knolle</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex flex-row gap-10 text-lg">
              <li><a href="#home" className="text-white hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Burger-Button */}
          <motion.button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
              />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Overlay (schließt Menü bei Klick) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menü (von unten nach oben) */}
      <motion.div
        initial={{ y: "100%"  }}
        animate={{ y: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-lg p-6 z-50 rounded-t-2xl"
      >
        <nav className="flex flex-col space-y-6 text-lg text-center">
          <a href="#home" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        {/* Schließen-Button */}
        <div className="flex justify-center mt-6">
          <button className="text-gray-400 hover:text-white text-lg" onClick={() => setIsMenuOpen(false)}>
            ✕ Menü schließen
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;
