import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import InstallerCard from "./components/InstallerCard";

export default function KatifetchLanding() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 font-sans"
    >
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 flex items-center justify-center shadow-2xl">
            <span className="font-mono text-lg font-semibold">K</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Katifetch</h1>
            <p className="text-xs text-slate-400">
              Lightweight, fast, and fully customizable system info fetcher.
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href="https://github.com/ximimoments/katifetch"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-800/60 hover:bg-slate-800/80"
          >
            <Github size={16} /> <span className="text-sm">GitHub</span>
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: main info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Katifetch — system info with style
            </h2>
            <p className="text-slate-300 max-w-xl">
              Lightweight, cross-platform, and fully customizable. Works on
              Linux, macOS, Windows, Termux, and more — includes themes, ASCII
              logos, and installer scripts.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:scale-[1.01] transform transition"
              >
                Learn More
              </button>
              <a
                href="https://github.com/ximimoments/katifetch"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800/60 hover:bg-slate-800/80"
              >
                More Details
              </a>
            </div>

            {showInfo && (
              <div className="p-4 mt-4 rounded-xl bg-slate-800/50 border border-slate-700 text-sm text-slate-200 space-y-2">
                <p>
   <h3 className="text-2xl font-semibold mb-3">About Katifetch</h3>
        <p className="mb-2">
          Katifetch is a lightweight terminal system info tool, inspired by <strong>Neofetch</strong> for Linux and Termux. It provides system details such as OS, kernel, desktop environment, uptime, memory usage, and more, with colorful ASCII logos and modular themes.
        </p>
        <p className="mb-2">
          Unlike Neofetch, Katifetch has been adapted for multiple platforms including <strong>Windows, macOS, ChromeOS, Android (Termux)</strong>, and works even in virtual machines lines like VMWare, VirtualBox, and QEMU.
        </p>
          Katifetch is designed to be fully customizable, easy to use, and fast. It also includes installer scripts for simplified installation on supported platforms.
                </p>
            </div>
            )}
          </motion.div>

          {/* Right: image instead of system info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-2xl flex justify-center items-center"
          >
            <img 
              src="src/infokati.png" 
              alt="src/infokati.png" 
              className="max-w-full h-auto rounded-lg"
            />
          </motion.div>
        </section>

        {/* Installer Section */}
        <div className="mt-20">
          <InstallerCard />
        </div>

        <footer className="mt-20 border-t border-slate-800/60 pt-8 pb-12 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Katifetch — Built by kati dev
        </footer>
      </main>
    </motion.div>
  );
}
