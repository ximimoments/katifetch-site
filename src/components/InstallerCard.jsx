import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function InstallerCard() {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center text-white shadow-lg max-w-lg mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-3">Download Katifetch</h2>
      <p className="text-gray-200 mb-6">
        Choose your preferred format to install Katifetch on your system.
      </p>

      {/* Download Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="https://github.com/ximimoments/katifetch/releases/latest/download/katifetch-1.3.deb"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
        >
          <Download size={18} />
          <span>.deb (Ubuntu/Debian)</span>
        </a>

        <a
          href="https://github.com/ximimoments/katifetch/releases/latest/download/katifetch-1.3-1.fc42.noarch.rpm"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg font-medium"
        >
          <Download size={18} />
          <span>.rpm (Fedora/RHEL)</span>
        </a>

        <a
          href="https://github.com/ximimoments/katifetch/releases/latest/download/katifetch-1.3.tar.gz"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg font-medium"
        >
          <Download size={18} />
          <span>.tar.gz (Manual)</span>
        </a>
      </div>

      {/* Installation Guide */}
      <div className="text-left bg-slate-800/50 p-6 rounded-lg text-slate-200 mb-6">
        <h3 className="text-2xl font-semibold mb-3">Installation Guide</h3>
        <p className="mb-3">
          Follow these steps in your terminal to install Katifetch:
        </p>

        <pre className="bg-slate-900/40 p-4 rounded-lg overflow-auto text-sm">
{`# 1. Clone the repository
git clone https://github.com/ximimoments/katifetch.git && cd katifetch

# 2. Make the installer executable
chmod +x install.sh

# 3. Run the installer (you will be prompted for your password)
./install.sh

# 4. After installation, just run Katifetch
katifetch`}
        </pre>

        <p className="mt-3">
          That's it! Katifetch is now installed and ready to use.
        </p>
      </div>

      {/* Additional Information */}
      <div className="text-left bg-slate-800/50 p-6 rounded-lg text-slate-200">
        <h3 className="text-2xl font-semibold mb-3">About Katifetch</h3>
        <p className="mb-2">
          Katifetch is a lightweight terminal system info tool, inspired by <strong>Neofetch</strong> for Linux and Termux. It provides system details such as OS, kernel, desktop environment, uptime, memory usage, and more, with colorful ASCII logos and modular themes.
        </p>
        <p className="mb-2">
          Unlike Neofetch, Katifetch has been adapted for multiple platforms including <strong>Windows, macOS, ChromeOS, Android (Termux)</strong>, and works even in virtual machines like VMWare, VirtualBox, and QEMU.
        </p>
        <p>
          Katifetch is designed to be fully customizable, easy to use, and fast. It also includes installer scripts for simplified installation on supported platforms.
        </p>
      </div>
    </motion.div>
  );
}
