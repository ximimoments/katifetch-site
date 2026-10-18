import React from "react";
import { motion } from "framer-motion";

export default function LogoRequest() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center gap-6 sm:gap-10 w-full max-w-full box-border overflow-hidden"
    >
      {/* ASCII Art Side */}
      <div className="bg-black/50 p-4 sm:p-6 rounded-2xl border border-indigo-500/25 shadow-inner overflow-x-auto max-w-full">
        <pre className="font-mono text-indigo-400 text-[9px] sm:text-xs leading-none drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">
{`       /\\
      /  \\
     /\\   \\
    /      \\
   /   ,,   \\
  /   |  |   \\
 /_-''    ''-_\\`}
        </pre>
      </div>

      {/* Text Side */}
      <div className="flex-1 space-y-4 text-center md:text-left w-full">
        <h2 className="text-xl sm:text-2xl font-bold italic">Missing your OS?</h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          We want to support every distribution. If your favorite OS logo is missing, 
          let's build it together for the next release.
        </p>
        <a 
          href="https://github.com/ximimoments/katifetch/issues/new"
          target="_blank"
          rel="noreferrer"
          className="inline-flex px-5 py-2 rounded-xl bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm hover:bg-indigo-500 hover:text-white transition-all"
        >
          Request a Logo
        </a>
      </div>
    </motion.section>
  );
}
