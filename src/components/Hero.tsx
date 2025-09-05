import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Sparkles, Code2, Star, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30"></div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Interactive Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"
          />
          <motion.div
            style={{
              x: mousePosition.x * -0.01,
              y: mousePosition.y * -0.01,
            }}
            variants={floatingVariants}
            animate="animate"
            className="absolute top-40 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-xl"
          />
          <motion.div
            style={{
              x: mousePosition.x * 0.015,
              y: mousePosition.y * 0.015,
            }}
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-20 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Enhanced Badge - Mobile Optimized */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 10px rgba(59, 130, 246, 0.1)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600 dark:text-blue-400" />
              </motion.div>
              Launching Developer-First Products
              <motion.div
                className="ml-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading - Mobile Optimized */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            We build & launch{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              developer-first
            </motion.span>{' '}
            digital products
          </motion.h1>

          {/* Enhanced Subheading - Mobile Optimized */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-4"
          >
            A modern product studio shaping the future of web tools.
            We turn ideas into scalable platforms that developers love.
          </motion.p>

          {/* Enhanced CTA Buttons - Mobile Optimized */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
          >
            <motion.button
              onClick={() => scrollToSection('products')}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base sm:text-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('collaborate')}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Us
            </motion.button>
          </motion.div>

          {/* Enhanced Floating Product Cards - Mobile Responsive */}
          <motion.div
            variants={itemVariants}
            className="pt-12 sm:pt-16 relative hidden sm:block"
          >
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="will-change-transform"
              >
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer">
                  <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">CodeGram</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Social for Devs</div>
                  <div className="flex items-center mt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">Live</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer will-change-transform"
              >
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <Rocket className="h-8 w-8 sm:h-12 sm:w-12 text-white mb-3 sm:mb-4 mx-auto" />
                    <div className="text-white text-center">
                      <div className="font-bold text-base sm:text-lg">Appnity</div>
                      <div className="text-blue-100 text-xs sm:text-sm">Product Studio</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="will-change-transform"
              >
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-2 group-hover:scale-110 transition-transform"></div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">ToolForge</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Coming Soon</div>
                  <div className="flex items-center mt-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 ml-2">In Development</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Product Cards - Visible only on mobile */}
          <motion.div
            variants={itemVariants}
            className="pt-8 sm:hidden"
          >
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              >
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                <div className="text-sm font-semibold text-gray-900 dark:text-white">CodeGram</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Live</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-2"></div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">ToolForge</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Soon</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;