import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Heart } from "lucide-react";
import InstallerCard from "./components/InstallerCard";
import LogoRequest from "./components/LogoRequest";
import RiceGallery from "./components/RiceGallery";
import ApacheView from "./components/ApacheView";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showApache, setShowApache] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-slate-100 font-sans relative overflow-x-hidden scroll-smooth"
    >
      {/* MATRIX BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)`, 
            backgroundSize: '35px 35px' 
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black border border-green-500 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex items-center justify-center">
              <span className="font-mono text-lg font-bold text-[#00ff41]">K</span>
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold">Katifetch</h1>
              <p className="text-[10px] md:text-xs text-green-500/60 font-mono italic">
                [katidev@system ~]$ _
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="#support"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all text-[#00ff41]"
            >
              <Heart size={16} /> <span className="text-xs font-mono">Support</span>
            </a>
            <a
              href="https://github.com/ximimoments/katifetch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-slate-300"
            >
              <Github size={16} /> <span className="text-xs hidden sm:inline font-mono">GitHub</span>
            </a>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <AnimatePresence mode="wait">
            {showApache ? (
              <motion.div
                key="apache"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <button 
                  onClick={() => setShowApache(false)}
                  className="mb-6 text-xs font-mono text-green-500 hover:text-white border border-green-500/30 px-3 py-1 rounded-md"
                >
                  [ ↩ BACK TO HOME ]
                </button>
                <ApacheView />
              </motion.div>
            ) : (
              <motion.div key="landing" exit={{ opacity: 0 }}>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  
                  <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                      Katifetch — system info with <span className="text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">style</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto md:mx-0">
                      Lightweight, cross-platform, and fully customizable. Works on
                      Linux, macOS, Windows, Termux, and more.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:bg-green-500 transition"
                      >
                        Learn More
                      </button>
                      <a
                        href="https://github.com/ximimoments/katifetch"
                        className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition font-mono text-sm"
                      >
                        More Details
                      </a>
                    </div>

                    {showInfo && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="p-4 mt-4 rounded-xl bg-green-950/10 border border-green-500/20 text-xs text-left text-slate-300 font-mono"
                      >
                        Katifetch is a lightweight terminal system info tool, inspired by Neofetch. It has been adapted for multiple platforms including Windows, macOS, ChromeOS, and Android (Termux).
                      </motion.div>
                    )}
                  </div>

                  <div className="flex justify-center order-1 md:order-2">
                    <img 
                      src={import.meta.env.BASE_URL + "infokati.png"}  
                      alt="Katifetch info" 
                      className="max-w-[280px] sm:max-w-full h-auto rounded-xl border border-white/10 shadow-2xl"
                    />
                  </div>
                </section>

                <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
                  <LogoRequest />
                  <InstallerCard />

                  {/* 100% FREE SUPPORT SECTION */}
                  <section id="support" className="pt-8 text-center scroll-mt-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                      Support <span className="text-[#00ff41]">Katifetch</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8 text-xs md:text-sm font-sans">
                      Katifetch is community-driven software. True backing doesn't require corporate funds—collaboration, packaging, and code contributions are what keep us moving forward!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-5xl mx-auto">
                      {/* Código */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300">
                        <div className="text-xl mb-2">💻</div>
                        <h3 className="text-sm font-bold text-white mb-1 font-mono">Contribute Code</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
                          Help us improve! Fix formatting, add device parameters, or submit pull requests directly to our codebase.
                        </p>
                        <a 
                          href="https://github.com/ximimoments/katifetch" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] text-[#00ff41] hover:underline"
                        >
                          Open Repository →
                        </a>
                      </div>

                      {/* Empaquetado */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300">
                        <div className="text-xl mb-2">📦</div>
                        <h3 className="text-sm font-bold text-white mb-1 font-mono">Package It</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Maintain packages for distributions or handle system repositories? Help us bring Katifetch native binaries to more downstream targets.
                        </p>
                      </div>

                      {/* Compartir */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300">
                        <div className="text-xl mb-2">📸</div>
                        <h3 className="text-sm font-bold text-white mb-1 font-mono">Share Your Setup</h3>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Take a nice screenshot of your desktop customized setup running Katifetch and share it on communities like r/unixporn or Discord.
                        </p>
                      </div>
                    </div>
                  </section>

                  <RiceGallery />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <footer className="mt-20 border-t border-white/5 pt-8 pb-12 text-center text-xs text-slate-500">
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
