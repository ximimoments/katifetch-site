import React from "react";
import { motion } from "framer-motion";

const screenshots = [
  { title: "Alpine Linux Edge", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/AlpineLinuxEdge.png?raw=true" },
  { title: "Alpine Linux On VNC", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/AlpineonVNC.png?raw=true" },
  { title: "Chimera Linux", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/ChimeraLinux.png?raw=true" },
  { title: "Debian 13 Testing", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Debian13Testing.png?raw=true" },
  { title: "Fedora 42 XFCE", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Fedora42XFCE.png?raw=true" },
  { title: "Haiku Beta 5", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/HaikuBeta5.png?raw=true" },
  { title: "Linux Mint 22.2 & LMDE 6", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/LinuxMint22.2andLMDE7.png?raw=true" },
  { title: "OpenSuse Leap 15.6 (WSL)", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/OpenSuse15.6LeapWSL.PNG?raw=true" },
  { title: "OpenBSD 7.8", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Openbsd7.8.png?raw=true" },
  { title: "Rocky Linux 9.7", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Rockylinux9.7.png?raw=true" },
  { title: "Ubuntu 22.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu22.04.png?raw=true" },
  { title: "Ubuntu 24.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu24.04.png?raw=true" },
  { title: "Ubuntu 26.04", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/Ubuntu26.04.png?raw=true" },
  { title: "Void Linux", url: "https://github.com/ximimoments/katifetchscreenshots/blob/main/formywebsite/VoidLinux.png?raw=true" }
];

export default function RiceGallery() {
  return (
    <section className="mt-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold tracking-tighter text-white italic uppercase"
        >
          The Rice Gallery
        </motion.h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-fuchsia-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-slate-400 mt-4 text-sm font-medium">
          A visual tour of Katifetch's flexibility across 14 distinct systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {screenshots.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative aspect-video bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all"
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
            />
            
            {/* Tag overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/50 backdrop-blur-sm px-2 py-1 rounded border border-indigo-500/30">
                {img.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center text-xs text-slate-600 italic">
        Showcasing the versatility of Katifetch — from BSD to Linux and beyond.
      </div>
    </section>
  );
}
