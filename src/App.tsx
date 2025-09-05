import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTracker from './components/ScrollTracker';
import ThreeBackground from './components/ThreeBackground';
import ScrollSpy from './components/ScrollSpy';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Training from './pages/Training';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Documentation from './pages/Documentation';
import ApiReference from './pages/ApiReference';
import Blog from './pages/Blog';
import Changelog from './pages/Changelog';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-gray-950 transition-colors"
        >
          <ThreeBackground />
          <ScrollTracker />
          <ScrollSpy />
          <Header />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/training" element={<Training />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/api-reference" element={<ApiReference />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/changelog" element={<Changelog />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      )}
    </ThemeProvider>
  );
}

export default App;