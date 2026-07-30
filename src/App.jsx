import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Heart, Home, Folder, Terminal, Layers, Monitor, Cpu, Globe, ArrowUpRight } from "lucide-react";
import InstallerCard from "./components/InstallerCard";
import LogoRequest from "./components/LogoRequest";
import RiceGallery from "./components/RiceGallery";
import ApacheView from "./components/ApacheView";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showApache, setShowApache] = useState(false);
  
  const [currentTab, setCurrentTab] = useState(() => {
    const path = window.location.pathname;
    if (path === "/reposofficial") return "repos";
    if (path === "/sponsor") return "sponsors";
    return "home";
  });

  const navigateTo = (tab) => {
    setShowApache(false);
    setCurrentTab(tab);
    
    let targetPath = "/";
    if (tab === "repos") targetPath = "/reposofficial";
    if (tab === "sponsors") targetPath = "/sponsor";
    
    window.history.pushState({ tab }, "", targetPath);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      setShowApache(false);
      if (event.state && event.state.tab) {
        setCurrentTab(event.state.tab);
      } else {
        const path = window.location.pathname;
        if (path === "/reposofficial") setCurrentTab("repos");
        else if (path === "/sponsor") setCurrentTab("sponsors");
        else setCurrentTab("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const officialRepos = [
    { name: "katifetch", desc: "The main core repository. Lightweight, cross-platform system information tool written for general terminal emulators.", url: "https://github.com/ximimoments/katifetch", icon: <Terminal className="text-[#00ff41]" size={20} /> },
    { name: "Katifetch-on-Everything", desc: "Experimental build configurations and documentation on running Katifetch scripts on virtually every device.", url: "https://github.com/ximimoments/Katifetch-on-Everything", icon: <Layers className="text-[#00ff41]" size={20} /> },
    { name: "KatifetchOS", desc: "An independent custom ecosystem deployment. System architecture files and configuration sets.", url: "https://github.com/ximimoments/KatifetchOS", icon: <Cpu className="text-[#00ff41]" size={20} /> },
    { name: "Katifetch-Web", desc: "The official implementation running environment tailored for static cloud clients and modern web preview modules.", url: "https://ximimoments.github.io/Katifetch-Web/", icon: <Globe className="text-[#00ff41]" size={20} /> },
    { name: "katifetch-for-android-shell-Magisk-Module", desc: "System-less flashable utility zip module optimized for rooted Android environments running Magisk environment chains.", url: "https://github.com/ximimoments/katifetch-for-android-shell-Magisk-Module", icon: <Terminal className="text-[#00ff41]" size={20} /> },
    { name: "katifetchscreenshots", desc: "Official data hub containing target logs, user-contributed configuration dots, asset files, and desktop layouts.", url: "https://github.com/ximimoments/katifetchscreenshots", icon: <Monitor className="text-[#00ff41]" size={20} /> },
    { name: "Katifetch-turbowarp", desc: "Visual blocks compilation and graphic code interfaces optimized for TurboWarp compilers and engine setups.", url: "https://github.com/ximimoments/Katifetch-turbowarp", icon: <Layers className="text-[#00ff41]" size={20} /> },
    { name: "katifetch-tizen", desc: "Ported configuration profiles and testing layers built specifically for microcomputer spaces and Tizen OS engines.", url: "https://github.com/ximimoments/katifetch-tizen", icon: <Cpu className="text-[#00ff41]" size={20} /> },
    { name: "katifetch-for-unreleased-editions", desc: "Development staging branch. Holds experimental architecture, unstable features, and pre-release code segments.", url: "https://github.com/ximimoments/katifetch-for-unreleased-editions", icon: <Terminal className="text-[#00ff41]" size={20} /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-black text-slate-100 font-sans relative overflow-x-hidden"
    >
      {/* CAPA DE FONDO HACKER: CUADRÍCULA DIGITAL Y RADIAL GLOW INTEGRADOS */}
      <div className="fixed inset-0 pointer-events-none z-0 w-full h-full bg-black">
        {/* Líneas horizontales y verticales tipo grilla retro/cyberpunk */}
        <div 
          className="absolute inset-0 opacity-[0.07] w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ff41 1px, transparent 1px),
              linear-gradient(to bottom, #00ff41 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        ></div>
        
        {/* Resplandor verde de la terminal en el centro superior */}
        <div 
          className="absolute inset-0 opacity-20 w-full h-full" 
          style={{ 
            background: "radial-gradient(circle at 50% 0%, rgba(0, 255, 65, 0.15) 0%, transparent 75%)" 
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div 
            onClick={() => navigateTo("home")} 
            className="flex items-center gap-3 md:gap-4 cursor-pointer group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black border border-green-500 shadow-[0_0_15px_rgba(0,255,65,0.2)] flex items-center justify-center group-hover:border-green-400 transition-all overflow-hidden p-1">
              <img 
                src="https://raw.githubusercontent.com/ximimoments/katifetch/refs/heads/main/media/katifetchlogo.png" 
                alt="Katifetch Logo" 
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold group-hover:text-green-400 transition-colors">Katifetch</h1>
              <p className="text-[10px] md:text-xs text-green-500/60 font-mono italic">
                [katidev@system ~]$ _
              </p>
            </div>
          </div>

          {/* NAV BAR */}
          <nav className="flex items-center flex-wrap justify-center gap-2">
            <button
              onClick={() => navigateTo("home")}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all font-mono text-xs ${
                currentTab === "home" && !showApache
                  ? "bg-green-500/10 border-green-500 text-[#00ff41]" 
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Home size={14} /> <span>Home</span>
            </button>

            <button
              onClick={() => navigateTo("repos")}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all font-mono text-xs ${
                currentTab === "repos" && !showApache
                  ? "bg-green-500/10 border-green-500 text-[#00ff41]" 
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Folder size={14} /> <span>Repos</span>
            </button>

            <button
              onClick={() => navigateTo("sponsors")}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all font-mono text-xs ${
                currentTab === "sponsors" && !showApache
                  ? "bg-green-500/10 border-green-500 text-[#00ff41]" 
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Heart size={14} /> <span>Sponsors</span>
            </button>

            {/* BOTÓN SURVEY - Apuntando directamente al HTML alojado en public/survey/ */}
            <a
              href="/surveykatifetch.html"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-slate-400 font-mono text-xs"
            >
              <Terminal size={14} /> <span>Survey</span>
            </a>

            <a
              href="https://github.com/ximimoments/katifetch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-slate-300"
            >
              <Github size={14} /> <span className="text-xs font-mono">GitHub</span>
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
                  onClick={() => navigateTo("home")}
                  className="mb-6 text-xs font-mono text-green-500 hover:text-white border border-green-500/30 px-3 py-1 rounded-md"
                >
                  [ ↩ BACK TO HOME ]
                </button>
                <ApacheView />
              </motion.div>
            ) : currentTab === "repos" ? (
              
              /* SECCIÓN: REPOS */
              <motion.div
                key="repos-session"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12 py-6"
              >
                <div className="text-center max-w-2xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                    Katifetch <span className="text-[#00ff41]">repos</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    Explore all targeted build layers, custom firmware modifications, module setups, and deployment trees within the official Katifetch network.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">
                  {officialRepos.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group p-5 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl"
                    >
                      <div className="space-y-2">
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-green-500/20 transition-colors">
                          {repo.icon}
                        </div>
                        <h3 className="text-sm font-bold text-slate-100 font-mono break-all group-hover:text-[#00ff41] transition-colors">
                          {repo.name}
                        </h3>
                        <p className="text-slate-400 text-xs font-sans leading-relaxed line-clamp-3">
                          {repo.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 group-hover:text-green-400 transition-colors pt-2 border-t border-white/[0.03]">
                        <span>Access Resource</span> <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center pt-6">
                  <button
                    onClick={() => navigateTo("home")}
                    className="text-xs font-mono text-slate-500 hover:text-green-400 transition-colors"
                  >
                    [ Go back to home page ]
                  </button>
                </div>
              </motion.div>

            ) : currentTab === "sponsors" ? (
              
              /* SECCIÓN: SPONSORS */
              <motion.div
                key="sponsors-session"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12 py-6"
              >
                <div className="text-center max-w-2xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                    Support <span className="text-[#00ff41]">Katifetch</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    Katifetch is community-driven software. True backing doesn't require corporate funds or financial models—collaboration, upstream packaging, and open-source contributions are what keep us moving forward.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                  <div className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="text-2xl mb-3">💻</div>
                      <h3 className="text-base font-bold text-white mb-2 font-mono">Contribute Code</h3>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">
                        Help us improve! Fix formatting, patch system features, add missing device parameters, or submit pull requests straight to our codebase.
                      </p>
                    </div>
                    <a 
                      href="https://github.com/ximimoments/katifetch" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-[#00ff41] hover:underline mt-4 inline-block font-mono"
                    >
                      Open Repository →
                    </a>
                  </div>

                  <div className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all duration-300">
                    <div className="text-2xl mb-3">📦</div>
                    <h3 className="text-base font-bold text-white mb-2 font-mono">Package It</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      Maintain repositories for upstream distributions? Help us expand our native binary support across more target managers and environments.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all duration-300">
                    <div className="text-2xl mb-3">📸</div>
                    <h3 className="text-base font-bold text-white mb-2 font-mono">Share Your Setup</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      Take a beautiful screenshot of your customized desktop layout running Katifetch inside your terminal emulator and share it over r/unixporn, Mastodon, or Discord logs.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <button
                    onClick={() => navigateTo("home")}
                    className="text-xs font-mono text-slate-500 hover:text-green-400 transition-colors"
                  >
                    [ Go back to home page ]
                  </button>
                </div>
              </motion.div>
            ) : (
              
              /* SECCIÓN: HOME LANDING */
              <motion.div key="landing-session" exit={{ opacity: 0 }}>
                <section className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center px-2">
                  <div className="w-full flex justify-center order-1 md:order-2">
                    <img 
                      src={import.meta.env.BASE_URL + "infokati.png"}  
                      alt="Katifetch info" 
                      className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-full h-auto rounded-xl border border-white/10 shadow-2xl"
                    />
                  </div>

                  <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1 w-full max-w-md md:max-w-none mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
                      Katifetch — system info with <span className="text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">style</span>
                    </h2>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base px-2 sm:px-0">
                      Lightweight, cross-platform, and fully customizable. Works on
                      Linux, macOS, Windows, Termux, and more.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start px-4 sm:px-0">
                      <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-green-600 text-white text-sm font-bold shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:bg-green-500 transition"
                      >
                        Learn More
                      </button>
                      <a
                        href="https://github.com/ximimoments/katifetch"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition font-mono text-center text-xs sm:text-sm text-slate-300"
                      >
                        More Details
                      </a>
                    </div>

                    {showInfo && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="p-4 mt-4 rounded-xl bg-green-950/10 border border-green-500/20 text-[11px] sm:text-xs text-left text-slate-300 font-mono break-words mx-4 sm:mx-0"
                      >
                        Katifetch is a lightweight terminal system info tool, inspired by Neofetch. It has been adapted for multiple platforms including Windows, macOS, ChromeOS, and Android (Termux).
                      </motion.div>
                    )}
                  </div>
                </section>

                <div className="mt-14 md:mt-24 space-y-14 md:space-y-24">
                  <LogoRequest />
                  <InstallerCard />
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
