import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, X, ExternalLink } from "lucide-react";

export default function BlogView() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      content: "test blog",
      url: "https://github.com/ximimoments/katifetch"
    },
    {
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      image: "https://raw.githubusercontent.com/ximimoments/katifetch-site/main/src/components/screenshots/Screenshot%20From%202026-10-10%2014-23-32.png",
      content: "Testing Blogs screenshots btw",
      url: "https://github.com/ximimoments/katifetch"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12 py-6 max-w-4xl mx-auto px-4 relative"
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
            {post.image && (
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(post.image);
                }}
                className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-white/10 bg-black/60 block cursor-pointer relative group/img"
                title="Click to enlarge image"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                />
              </div>
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

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-green-400 transition-colors cursor-pointer"
              >
                <BookOpen size={14} />
                <span>Read full post</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f19] border border-green-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_0_40px_rgba(0,255,65,0.15)] text-slate-200 cursor-default"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 bg-white/5 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-green-400 mb-2">
                <Calendar size={14} />
                <span>{selectedPost.date}</span>
              </div>

              <h2 className="text-2xl font-bold font-mono text-white mb-4">
                {selectedPost.title}
              </h2>

              {selectedPost.image && (
                <div className="mb-6 rounded-lg overflow-hidden border border-white/10 max-h-60">
                  <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-4 text-sm font-sans text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                <p>{selectedPost.content}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <a
                  href={selectedPost.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono hover:bg-green-500/20 transition-colors"
                >
                  <BookOpen size={14} />
                  <span>View repository on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-slate-400 hover:text-white p-1 bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged screenshot"
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-green-500/30 shadow-[0_0_30px_rgba(0,255,65,0.2)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
