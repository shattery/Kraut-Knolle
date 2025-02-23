import  { useState } from "react";
import { motion } from "framer-motion";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("vorspeisen");
  const [selectedDish, setSelectedDish] = useState(null);

  const menuItems = {
    vorspeisen: [
      { name: "Süßkartoffelsuppe", description: "Mit gerösteten Kichererbsen", price: "5,90€", image: "./img/Süßkartoffelsuppe.jpg" },
      { name: "Cashew-Dip", description: "Mit frischem Gemüse", price: "4,50€", image: "./img/Cashew-Dip.png" },
      { name: "Bruschetta", description: "Mit Tomaten, Basilikum & Balsamico", price: "6,20€", image: "./img/Bruschetta.png" },
      { name: "Hummus", description: "Mit Olivenöl & Fladenbrot", price: "5,00€", image: "./img/olivenbrot.png" },
      { name: "Vegane Frühlingsrollen", description: "Mit Erdnuss-Dip", price: "5,80€", image: "./img/Vegane Frühlingsrollen.png" },
    ],
    hauptgerichte: [
      { name: "Buddha-Bowl", description: "Mit Quinoa, Avocado & Gemüse", price: "12,90€", image: "./img/Buddha-Bowl.png" },
      { name: "Veganer Burger", description: "Mit Linsenscheibe & BBQ-Sauce", price: "10,50€", image: "./img/Veganer Burger.jpg" },
      { name: "Pasta Arrabiata", description: "Mit scharfer Tomatensauce", price: "9,80€", image: "./img/Pasta Arrabiata.png" },
      { name: "Ratatouille", description: "Geschmortes Gemüse mit Kräutern", price: "11,30€", image: "./img/Ratatouille.png" },
      { name: "Gemüse-Curry", description: "Mit Kokosmilch & Reis", price: "10,90€", image: "./img/Gemüse-Curry.jpg" },
    ],
    nachtisch: [
      { name: "Schoko-Mousse", description: "Mit Zartbitterschokolade", price: "6,50€", image: "./img/Schoko-Mousse.jpg" },
      { name: "Panna Cotta", description: "Mit Beerensauce", price: "5,90€", image: "./img/panna-cotta.png" },
      { name: "Tiramisu", description: "Mit Espresso und Kakao", price: "7,20€", image: "./img/Tiramisu.jpg" },
      { name: "Apfelstrudel", description: "Mit Vanillesoße", price: "6,80€", image: "./img/apfelstrudel.jpg" },
      { name: "Mandel-Brownie", description: "Saftig & schokoladig", price: "6,00€", image: "./img/Mandel-Brownie.png" },
    ],
  };
  
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-cover bg-center border-[3px] rounded-[10px] border-slate-400 py-10 px-4"
      style={{ backgroundImage: "url('./img/board.jpg')" }}>
      
      {/* Dunkles Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[10px]"></div>

      {/* Menü-Inhalt */}
      <div className="relative z-10 text-white text-center w-full max-w-4xl p-6 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bell mb-6 tracking-wide">🍽 Unsere Speisekarte</h2>

        {/* Kategorie-Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-6 rounded-full font-semibold text-lg border-2 border-white transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black shadow-md"
                  : "bg-transparent text-white hover:bg-white hover:text-black"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menü-Liste */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menuItems[selectedCategory].map((item, index) => (
            <div key={index} 
              className="p-4 border-2 border-white rounded-md bg-black bg-opacity-40 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedDish(item)}
            >
              <h3 className="text-2xl font-bell">{item.name}</h3>
              <p className="text-gray-200 text-sm italic">{item.description}</p>
              <p className="text-yellow-400 font-bold text-lg mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup für Gericht-Details */}
      {selectedDish && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDish(null)}
        >
          <motion.div 
            className="bg-black bg-opacity-90 text-white p-6 rounded-lg shadow-xl max-w-sm text-center relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen beim Klicken im Popup
          >
            {/* Schließen-Button */}
            <button 
              className="absolute top-0 right-1 text-white text-2xl font-bell"
              onClick={() => setSelectedDish(null)}
            >
              ✖
            </button>

            {/* Bild, Name, Beschreibung, Preis */}
            <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-50 object-cover rounded-lg mb-4 border-2 border-white"/>
            <h2 className="text-3xl font-bell">{selectedDish.name}</h2>
            <p className="text-gray-300 text-lg italic">{selectedDish.description}</p>
            <p className="text-yellow-400 font-bold text-2xl mt-4">{selectedDish.price}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Menu;
