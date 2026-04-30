import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ApacheView() {
  const [files, setFiles] = useState([]);
  
  // Obtenemos la ruta actual para saber en qué carpeta estamos
  const currentPath = window.location.pathname;

  useEffect(() => {
    // Si la ruta termina en /download/, carga el json raíz.
    // Si es /download/algo/, carga el json de esa carpeta.
    const jsonPath = currentPath.endsWith('/') ? `${currentPath}files.json` : `${currentPath}/files.json`;

    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error("No hay índice en esta carpeta");
        return res.json();
      })
      .then((data) => setFiles(data))
      .catch((err) => {
        console.error("Error:", err);
        // Si falla, podrías mostrar un mensaje o volver al anterior
      });
  }, [currentPath]); // Se vuelve a ejecutar si cambias de carpeta

  return (
    <div className="max-w-5xl mx-auto my-16 p-6 bg-black border border-green-500/30 font-mono shadow-[0_0_30px_rgba(0,255,65,0.15)] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-[2px] bg-green-500 animate-scan"></div>
      </div>

      <header className="mb-8">
        <h1 className="text-[#00ff41] text-2xl font-bold tracking-tighter uppercase italic">
          Index of {currentPath}
        </h1>
        <div className="h-0.5 w-full bg-green-900/50 mt-2"></div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-[#00ff41] border-b border-green-900">
              <th className="pb-3 px-2 uppercase tracking-widest text-xs">Filename</th>
              <th className="pb-3 px-2 uppercase tracking-widest text-xs text-center">Last Modified</th>
              <th className="pb-3 px-2 uppercase tracking-widest text-xs text-right">Size</th>
            </tr>
          </thead>
          <tbody className="text-green-800 font-medium">
            {/* Botón para volver atrás (Parent Directory) */}
            {currentPath !== "/download/" && (
              <tr className="hover:bg-green-500/5 transition-colors group">
                <td className="py-3 px-2 border-b border-green-900/20">
                  <a href="/download/" className="group-hover:text-[#00ff41] flex items-center gap-2">
                    <span className="text-lg">⤴</span> [Parent Directory]
                  </a>
                </td>
                <td className="text-center opacity-40">-</td>
                <td className="text-right opacity-40">-</td>
              </tr>
            )}

            {files.map((file, i) => {
              const isDir = file.type === 'directory';
              // Generamos el link correcto basado en la carpeta actual
              const link = currentPath.endsWith('/') ? `${currentPath}${file.name}` : `${currentPath}/${file.name}`;
              
              return (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-green-500/10 transition-colors group border-b border-green-900/20"
                >
                  <td className="py-3 px-2">
                    <a 
                      href={isDir ? `${link}/` : link} 
                      {...(!isDir && { download: true })}
                      className="group-hover:text-[#00ff41] flex items-center gap-3 transition-all"
                    >
                      <span className="text-green-900 group-hover:text-[#00ff41]">
                        {isDir ? '📁' : '📦'}
                      </span>
                      {file.name}
                    </a>
                  </td>
                  <td className="text-center opacity-60 tabular-nums">{file.date}</td>
                  <td className="text-right font-bold tabular-nums group-hover:text-green-400">
                    {file.size}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="mt-8 pt-4 border-t border-green-900/50 flex justify-between items-center text-[10px] text-green-900 tracking-tighter">
        <p>APACHE SERVER AT KATIFETCH.PAGES.DEV</p>
        <p className="animate-pulse">SYSTEM_STABLE</p>
      </footer>

      <style jsx>{`
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
        .animate-scan { animation: scan 4s linear infinite; }
      `}</style>
    </div>
  );
}
