import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import InstallerCard from "./components/InstallerCard";
import LogoRequest from "./components/LogoRequest";
import RiceGallery from "./components/RiceGallery";
import ApacheView from "./components/ApacheView"; // Ya veo que lo tienes en la carpeta components

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showApache, setShowApache] = useState(false); // El interruptor secreto

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-slate-100 font-sans relative overflow-x-hidden"
    >
      {/* EFECTO MATRIX DE FONDO (Cuadrícula verde tenue) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`, 
            backgroundSize: '45px 45px' 
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-900 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] border border-green-500/30">
              <span className="font-mono text-lg font-semibold text-white">K</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Katifetch</h1>
              <p className="text-xs text-green-500/60 font-mono"> Lightweight system info </p>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="https://github.com/ximimoments/katifetch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/5 hover:bg-green-500/10 border border-white/5 transition-all"
            >
              <Github size={16} /> <span className="text-sm">GitHub</span>
            </a>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {showApache ? (
              /* VISTA APACHE (SECRETA) */
              <motion.div 
                key="apache"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <button 
                  onClick={() => setShowApache(false)}
                  className="mb-6 text-xs font-mono text-green-500 hover:underline flex items-center gap-2"
                >
                  [ ↩ VOLVER AL SISTEMA ]
                </button>
                <ApacheView />
              </motion.div>
            ) : (
              /* VISTA LANDING NORMAL */
              <motion.div 
                key="landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                      Katifetch — system info with style
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                      Lightweight, cross-platform, and fully customizable. Works on
                      Linux, macOS, Windows, Termux, and more.
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="px-4 py-2 rounded-2xl bg-green-600 hover:bg-green-500 shadow-lg transition"
                      >
                        Learn More
                      </button>
                    </div>
                    
                    {showInfo && (
                       <div className="p-4 rounded-xl bg-green-950/20 border border-green-500/20 text-sm font-mono">
                          {/* Aquí va tu texto de "About Katifetch" */}
                          Katifetch is designed to be fast and customizable...
                       </div>
                    )}
                  </div>

                  <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex justify-center">
                    <img src="/infokati.png" alt="Katifetch info" className="max-w-full h-auto rounded-lg" />
                  </div>
                </section>

                <LogoRequest />
                <div className="mt-20"><InstallerCard /></div>
                <RiceGallery />
              </motion.div>
            )}
          </AnimatePresence>
          
          <footer className="mt-20 border-t border-slate-800/60 pt-8 pb-12 text-center text-sm text-slate-500 font-mono">
            © {new Date().getFullYear()} Katifetch — 
            <button 
              onClick={() => setShowApache(true)} 
              className="ml-1 hover:text-green-500 transition-colors"
            >
              Built by kati dev
            </button>
          </footer>
        </main>
      </div>
    </motion.div>
  );
}
