import React from "react";

function About() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Bild */}
        <div className="w-full md:w-1/2">
          <img
            src="/img/about_bild.png"
            alt="Über uns - Veganes Restaurant"
            className="rounded-lg shadow-lg w-full h-auto "
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🌿 Über uns – Kraut & Knolle
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Willkommen bei <span className="text-green-600 font-semibold">Kraut & Knolle</span>, deinem Ort für kreativen, nachhaltigen und köstlichen veganen Genuss. 
            Wir setzen auf hochwertige, pflanzliche Zutaten, die mit Liebe und Sorgfalt zu einzigartigen Gerichten verarbeitet werden.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Unser Ziel? <span className="text-green-600 font-semibold">Essen, das nicht nur gut schmeckt, sondern auch Gutes bewirkt</span> – für dich, die Umwelt und die Tiere. 
            Ob du bereits vegan lebst oder einfach neugierig auf neue Geschmackserlebnisse bist: Unsere Gerichte überraschen und begeistern.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Lass dich von unserer Leidenschaft für gutes Essen anstecken und entdecke, wie vielseitig und aufregend die vegane Küche sein kann. 
            <span className="text-green-600 font-semibold">Denn guter Geschmack kennt keine Grenzen.</span> 🌱✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
