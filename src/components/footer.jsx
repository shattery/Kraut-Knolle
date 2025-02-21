import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Modal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg border-[3px] border-slate-400 max-w-md">
        <h2 className="text-xl font-bold text-green-400">{title}</h2>
        {/* Gefährlich, aber hier sicher, weil du den Inhalt kontrollierst */}
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: content }} />
        <button onClick={onClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Schließen
        </button>
      </div>
    </div>
  );
}

function Footer() {
  const [openModal, setOpenModal] = useState(null);

  const modalContent = {
    Impressum: "Dies ist eine fiktive Website, die ausschließlich zu Demonstrationszwecken erstellt wurde. Alle hier aufgeführten Informationen sind nicht real und haben keine rechtliche Gültigkeit.",
    Datenschutz: `
      Diese Website sammelt keine personenbezogenen Daten. Es werden keine Formulare, Anmeldungen oder Tracking-Methoden verwendet, um Informationen über die Nutzer zu erfassen.<br>
      Jegliche Interaktion mit der Website erfolgt anonym.<br><br>
      Solltest du dennoch Fragen zum Datenschutz haben, kannst du uns jederzeit kontaktieren.
    `,
    AGB: `
      1. **Vertragsabschluss**: Auf dieser Website werden keine Transaktionen durchgeführt. Es handelt sich um eine rein informative Seite ohne Kauf- oder Vertragsabschlüsse.<br><br>
      2. **Leistungsbeschreibung**: Diese Website dient ausschließlich zu Demonstrationszwecken und bietet Informationen zu fiktiven Themen. Es gibt keine tatsächlichen Produkte oder Dienstleistungen.<br><br>
      3. **Haftung**: Wir übernehmen keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der Informationen auf dieser Website. Jegliche Nutzung erfolgt auf eigene Verantwortung.<br><br>
      4. **Gerichtsstand und anwendbares Recht**: Es gilt das Recht des Landes, in dem der Betreiber der Website seinen Sitz hat. Gerichtsstand ist [Ort].
    `
  };
  
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
          <button onClick={() => setOpenModal("Impressum")} className="hover:text-white transition">Impressum</button> |  
          <button onClick={() => setOpenModal("Datenschutz")} className="hover:text-white transition mx-2">Datenschutz</button> |  
          <button onClick={() => setOpenModal("AGB")} className="hover:text-white transition">AGB</button>
        </div>
      </div>
      
      {openModal && (
        <Modal title={openModal} content={modalContent[openModal]} onClose={() => setOpenModal(null)} />
      )}
    </footer>
  );
}

export default Footer;
