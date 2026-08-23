import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react"; // Necesitas instalar lucide-react

const screenshots = [
  { title: "Adeile Linux", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Adeilelinux.jpg?raw=true" },
  { title: "Alpine Linux Edge", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/AlpineLinuxEdge.png?raw=true" },
  { title: "Alpine Linux On VNC", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/AlpineonVNC.png?raw=true" },
  { title: "Chimera Linux", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/ChimeraLinux.png?raw=true" },
  { title: "Debian 13 Testing", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Debian13Testing.png?raw=true" },
  { title: "Fedora 42 XFCE", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Fedora42XFCE.png?raw=true" },
  { title: "Haiku Beta 5", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/HaikuBeta5.png?raw=true" },
  { title: "Linux Lite 8.0", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Linuxlite8.0.png?raw=true" },
  { title: "Linux Mint 22.2 & LMDE 6", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/LinuxMint22.2andLMDE7.png?raw=true" },
  { title: "Mageia 9", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Mageia9.png?raw=true" },
  { title: "Mageia 10", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Mageia10.png?raw=true" },
  { title: "OpenSuse Leap 15.6 (WSL)", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/OpenSuse15.6LeapWSL.PNG?raw=true" },
  { title: "OpenBSD 7.8", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Openbsd7.8.png?raw=true" },
  { title: "PostmarketOS Edge", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/PostmarketOSEdge.png?raw=true" },
  { title: "Rocky Linux 9.7", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Rockylinux9.7.png?raw=true" },
  { title: "Ubuntu 22.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu22.04.png?raw=true" },
  { title: "Ubuntu 24.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu24.04.png?raw=true" },
  { title: "Ubuntu 26.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu26.04.png?raw=true" },
  { title: "Void Linux", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/VoidLinux.png?raw=true" }
];

// Duplicamos el array para crear el efecto de scroll infinito
const duplicatedScreenshots = [...screenshots, ...screenshots];

export default function RiceGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImg]);

  return (
    <section className="mt-28 py-10 overflow-hidden bg-slate-950/50 border-y border-slate-800/50">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl font-extrabold tracking-tighter text-white italic uppercase">
          The OS Gallery
        </h2>
        <p className="text-slate-400 mt-3 text-sm max-w-md mx-auto">
          Click on any setup to explore the details of Katifetch in action.
        </p>
      </div>

      {/* Contenedor del Carrusel Infinito */}
      <div className="relative flex">
        <motion.div
          className="flex gap-6 px-3"
          animate={{
            x: ["0%", "-50%"], // Se mueve de 0 a la mitad (donde empieza la copia)
          }}
          transition={{
            x: {
              duration: 60, // Velocidad del scroll (más alto = más lento)
              ease: "linear",
              repeat: Infinity,
            },
          }}
          // Pausar la animación al hacer hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedScreenshots.map((img, index) => (
            <motion.div
              key={index}
              className="relative flex-none w-[280px] md:w-[350px] aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImg(img)}
              whileHover={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.4)" }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              
              {/* Overlay con icono de zoom y título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div className="flex justify-end">
                    <ZoomIn className="text-indigo-300 bg-black/50 p-1.5 rounded-full backdrop-blur-sm" size={28} />
                </div>
                <span className="text-[11px] font-mono font-bold text-white bg-indigo-950/70 backdrop-blur-sm px-2 py-1 rounded border border-indigo-500/30 self-start">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Degradados en los bordes para el efecto de "desvanecido" */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      </div>

      {/* --- LIGHTBOX MODAL (AnimatePresence para animaciones de entrada/salida) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImg(null)} // Cerrar al hacer clic fuera
          >
            {/* Botón Cerrar */}
            <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-[60] bg-black/50 p-2 rounded-full">
              <X size={24} />
            </button>

            {/* Contenedor de la imagen */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden border border-slate-800 shadow-3xl cursor-default"
              onClick={(e) => e.stopPropagation()} // No cerrar al hacer clic en la imagen
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              
              {/* Barra de título inferior en el modal */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-bold text-white bg-indigo-600/80 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                  {selectedImg.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
