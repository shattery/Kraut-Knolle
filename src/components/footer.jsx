import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Restaurant-Info */}
        <div>
          <h2 className="text-2xl font-bell text-white">Kraut & Knolle</h2>
          <p className="mt-2">Veganes Restaurant – Gesund & Lecker</p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaMapMarkerAlt /> Musterstraße 12, 12345 Berlin
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> +49 123 456 789
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> info@kraut-und-knolle.de
          </p>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h2 className="text-2xl font-bell text-white">Öffnungszeiten</h2>
          <p className="mt-2">🕒 Mo - Fr: 11:00 - 22:00 Uhr</p>
          <p>🕒 Sa - So: 12:00 - 23:00 Uhr</p>
        </div>
      </div>

      {/* Copyright & Rechtliches */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© 2025 Kraut & Knolle. Alle Rechte vorbehalten.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-white transition">Impressum</a> |  
          <a href="#" className="hover:text-white transition mx-2">Datenschutz</a> |  
          <a href="#" className="hover:text-white transition">AGB</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
