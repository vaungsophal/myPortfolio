import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User, Laptop, Rocket } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block font-mono">
      {displayText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#030014]" />
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 blur-3xl animate-pulse" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

    {/* Floating Orbs */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-blob" />
    <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
    <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group cursor-pointer">
    <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
    <div className="relative p-3 sm:p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 group-hover:text-white transition-colors" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4500); // Slightly increased time for better effect absorption

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative z-10 text-center px-4 w-full max-w-5xl">
            {/* Top Icons */}
            <motion.div
              className="flex justify-center gap-6 sm:gap-8 mb-12"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[Code2, User, Github, Laptop].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <IconButton Icon={Icon} />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Text */}
            <div className="mb-12 space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="overflow-hidden"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white/60 tracking-wider">
                  WELCOME TO MY
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                className="relative inline-block"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 filter drop-shadow-2xl">
                  PORTFOLIO
                </h1>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-2xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 tracking-wide">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">WEBSITE</span>
                </h2>
              </motion.div>
            </div>

            {/* URL/Link Section */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <a
                href="https://sophalvaung-dev.web.app"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-2 bg-indigo-600/20 rounded-full group-hover:bg-indigo-600/30 transition-colors">
                  <Globe className="w-5 h-5 text-indigo-400" />
                </div>

                <span className="relative text-lg sm:text-xl font-medium text-white/80 group-hover:text-white transition-colors">
                  <TypewriterEffect text="pol-dev.web.app" />
                </span>

                <Rocket className="w-5 h-5 text-purple-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;