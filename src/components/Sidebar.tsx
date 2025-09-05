import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Home, 
  Package, 
  Users, 
  MessageSquare, 
  Mail, 
  FileText,
  HelpCircle,
  Moon, 
  Sun, 
  Menu, 
  X,
  ChevronRight,
  ExternalLink,
  BarChart3,
  Code2,
  Clock,
  Wrench
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: FileText },
    { id: 'stats', name: 'Stats', icon: BarChart3 },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'case-study', name: 'Case Studies', icon: Code2 },
    { id: 'tech-stack', name: 'Tech Stack', icon: Wrench },
    { id: 'philosophy', name: 'Process', icon: Users },
    { id: 'timeline', name: 'Timeline', icon: Clock },
    { id: 'testimonials', name: 'Reviews', icon: MessageSquare },
    { id: 'faq', name: 'FAQ', icon: HelpCircle },
    { id: 'collaborate', name: 'Careers', icon: Users },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  const quickLinks = [
    { name: 'CodeGram', url: '#', icon: ExternalLink },
    { name: 'GitHub', url: '#', icon: ExternalLink },
    { name: 'Blog', url: '#', icon: ExternalLink },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 lg:hidden p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 z-50 lg:translate-x-0 lg:static lg:z-auto shadow-2xl lg:shadow-none"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center"
                >
                  <Rocket className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Appnity
                  </span>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Product Studio</div>
                </div>
              </motion.button>

              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Navigation
              </h3>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
                  whileHover={{ x: 4 }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200/50 dark:border-gray-800/50 space-y-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="font-medium">
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </motion.button>

            {/* Status */}
            <div className="px-4 py-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-800 dark:text-green-400">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Desktop Sidebar Toggle */}
      <div className="hidden lg:block fixed left-80 top-1/2 transform -translate-y-1/2 z-30">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-r-lg shadow-lg border border-l-0 border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          whileHover={{ x: 2 }}
        >
          <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </motion.button>
      </div>
    </>
  );
};

export default Sidebar;