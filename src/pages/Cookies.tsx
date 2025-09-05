import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Mail } from 'lucide-react';

const Cookies: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Session management', 'Security features', 'Load balancing'],
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: ['Theme preferences', 'Language settings', 'User preferences'],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Appnity Software Private Limited</title>
        <meta name="description" content="Appnity Software Private Limited's Cookie Policy - Learn about how we use cookies and similar technologies on our website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://appnity.com/cookies" />
      </Helmet>

      <div className="min-h-screen py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Cookie className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners about how their site is being used.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* How We Use Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Essential Website Functionality</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    We use essential cookies to enable core website functionality, including security features, session management, and basic site operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User Experience Enhancement</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    We use functional cookies to remember your preferences, such as theme settings (dark/light mode), language preferences, and other customization options.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics and Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    We use analytics cookies to understand how visitors use our website, which pages are most popular, and how we can improve the user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Google Analytics:</strong> For website analytics and performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Font Services:</strong> For loading web fonts from Google Fonts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>CDN Services:</strong> For faster content delivery</span>
                </li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Browser Settings</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. You can choose to accept or decline cookies, or set your browser to prompt you before accepting cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Impact of Disabling Cookies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Please note that disabling cookies may affect the functionality of our website. Some features may not work properly or may not be available if cookies are disabled.
                  </p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">hello@appnity.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cookies;