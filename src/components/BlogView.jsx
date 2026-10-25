import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

export default function BlogView() {
  const [activeSlug, setActiveSlug] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const posts = [
    {
      slug: "test-blog-title-1",
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      content: "test blog",
      url: "https://github.com/ximimoments/katifetch"
    },
    {
      slug: "test-blog-title-2",
      title: "Test Blog Title",
      date: "October 2026",
      summary: "test blog",
      image: "https://raw.githubusercontent.com/ximimoments/katifetch-site/main/src/components/screenshots/Screenshot%20From%202026-10-10%2014-23-32.png",
      content: "Testing Blogs screenshots btw",
      url: "https://github.com/ximimoments/katifetch"
    }
  ];

  const currentPost = posts.find((p) => p.slug === activeSlug);

  if (currentPost) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-8 py-6 max-w-3xl mx-auto px-4 font-sans text-slate-200"
      >
        <button
          onClick={() => setActiveSlug(null)}
          className="inline-flex items-center gap-2 text-xs font-mono text-green-400 hover:text-green-300 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Blog</span>
        </button>

        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-green-500/70">
            <Calendar size={14} />
            <span>{currentPost.date}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white font-mono">
            {currentPost.title}
          </h1>
        </div>

        {currentPost.image && (
          <div 
            onClick={() => setSelectedImage(currentPost.image)}
            className="rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer max-h-96"
          >
            <img src={currentPost.image} alt={currentPost.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>{currentPost.content}</p>
        </div>

        <div className="pt-6 border-t border-white/10 flex justify-end">
          <a
            href={currentPost.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono hover:bg-green-500/20 transition-colors"
          >
            <BookOpen size={14} />
            <span>View on GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </motion.div>
    );
  }

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
        {posts.map((post) => (
          <article 
            key={post.slug}
            onClick={() => setActiveSlug(post.slug)}
            className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:border-green-500/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col space-y-4 shadow-xl group overflow-hidden cursor-pointer"
          >
            {post.image && (
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(post.image);
                }}
                className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-white/10 bg-black/60 block relative group/img"
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
              <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-green-400 transition-colors">
                <BookOpen size={14} />
                <span>Read full post</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="text-xs font-mono text-slate-500">
                Katifetch DevLog
              </span>
            </div>
          </article>
        ))}
      </div>

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
