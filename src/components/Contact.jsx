import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Bleib mit uns in Kontakt! 🌱
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Wir lieben den Austausch mit unserer Community! Folge uns auf Social Media, 
          um keine Neuigkeiten zu verpassen und dich mit anderen Foodies zu vernetzen.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-gray-700 text-3xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaFacebook />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaTiktok />
          </a>
        </div>

        {/* Newsletter & Feedback */}
        <div className="mt-10 text-lg text-gray-700">
          <p className="mb-4">
            📩 <strong>Newsletter:</strong> Melde dich an, um exklusive Rezepte und News zu erhalten.
          </p>
          <p>
            💬 <strong>Feedback?</strong> Schreib uns eine Nachricht, wir freuen uns über deine Gedanken!
          </p>
        </div>

        {/* Hinweis zur Fiktionalität */}
        <p className="text-sm text-gray-500 mt-8">
          📢 <strong>Hinweis:</strong> Dieses Restaurant ist ein kreatives Projekt und existiert nicht in der realen Welt.
        </p>
      </div>
    </div>
  );
}

export default Contact;
