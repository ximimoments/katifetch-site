import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export default function BlogView() {
  const posts = [
    {
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      url: "https://github.com/ximimoments/katifetch"
    },
    {
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      image: "https://raw.githubusercontent.com/ximimoments/katifetch-site/main/src/components/screenshots/Screenshot%20From%202026-10-10%2014-23-32.png",
      url: "https://github.com/ximimoments/katifetch"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12 py-6 max-w-4xl mx-auto px-4"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 font-mono">
          Katifetch <span className="text-[#00ff41]">Blog</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed font-sans">
          Development logs, release notes, porting guides, and deep dives into the Katifetch ecosystem.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <article 
            key={idx}
            className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col space-y-4 shadow-xl group overflow-hidden"
          >
            {/* Imagen clickeable */}
            {post.image && (
              <a 
                href={post.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-white/10 bg-black/60 block cursor-pointer"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-green-500/70">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-mono group-hover:text-[#00ff41] transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-green-400 transition-colors"
              >
                <BookOpen size={14} />
                <span>Read more on GitHub</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
