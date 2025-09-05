import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Plus, 
  Wrench, 
  Bug, 
  Shield, 
  Zap, 
  Calendar,
  Tag,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Info,
  Star
} from 'lucide-react';

const Changelog: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState('all');

  const products = [
    { id: 'all', name: 'All Products' },
    { id: 'codegram', name: 'CodeGram' },
    { id: 'toolforge', name: 'ToolForge' },
    { id: 'launchboard', name: 'LaunchBoard' }
  ];

  const changelogEntries = [
    {
      version: 'v2.1.0',
      date: '2025-01-15',
      product: 'codegram',
      type: 'major',
      title: 'Real-time Collaboration Features',
      description: 'Major update introducing real-time collaborative editing and enhanced community features.',
      changes: [
        { type: 'feature', text: 'Real-time collaborative code editing' },
        { type: 'feature', text: 'Live cursor tracking and user presence' },
        { type: 'feature', text: 'Enhanced comment system with threading' },
        { type: 'improvement', text: 'Improved syntax highlighting performance' },
        { type: 'fix', text: 'Fixed mobile responsive issues on snippet editor' },
        { type: 'security', text: 'Enhanced API rate limiting and security measures' }
      ],
      breaking: false,
      stats: {
        commits: 47,
        contributors: 3,
        filesChanged: 23
      }
    },
    {
      version: 'v2.0.5',
      date: '2025-01-08',
      product: 'codegram',
      type: 'patch',
      title: 'Performance Improvements',
      description: 'Minor update focusing on performance optimizations and bug fixes.',
      changes: [
        { type: 'improvement', text: 'Reduced bundle size by 15%' },
        { type: 'improvement', text: 'Faster snippet loading times' },
        { type: 'fix', text: 'Fixed search functionality edge cases' },
        { type: 'fix', text: 'Resolved dark mode toggle issues' }
      ],
      breaking: false,
      stats: {
        commits: 12,
        contributors: 2,
        filesChanged: 8
      }
    },
    {
      version: 'v0.8.0',
      date: '2025-01-10',
      product: 'toolforge',
      type: 'minor',
      title: 'AI Code Generation Beta',
      description: 'Beta release of AI-powered code generation features for CLI tools.',
      changes: [
        { type: 'feature', text: 'AI-powered CLI tool generation (Beta)' },
        { type: 'feature', text: 'Natural language to code conversion' },
        { type: 'feature', text: 'Template library expansion' },
        { type: 'improvement', text: 'Enhanced error handling and validation' }
      ],
      breaking: false,
      stats: {
        commits: 34,
        contributors: 2,
        filesChanged: 19
      }
    },
    {
      version: 'v0.3.0',
      date: '2025-01-05',
      product: 'launchboard',
      type: 'minor',
      title: 'Project Analytics Dashboard',
      description: 'New analytics dashboard with comprehensive project insights and metrics.',
      changes: [
        { type: 'feature', text: 'Project analytics dashboard' },
        { type: 'feature', text: 'Time tracking visualization' },
        { type: 'feature', text: 'Team productivity metrics' },
        { type: 'improvement', text: 'Enhanced project creation workflow' }
      ],
      breaking: false,
      stats: {
        commits: 28,
        contributors: 3,
        filesChanged: 15
      }
    },
    {
      version: 'v2.0.0',
      date: '2024-12-20',
      product: 'codegram',
      type: 'major',
      title: 'Major Architecture Overhaul',
      description: 'Complete rewrite with improved performance, new features, and breaking changes.',
      changes: [
        { type: 'feature', text: 'New user profile system' },
        { type: 'feature', text: 'Advanced snippet organization' },
        { type: 'improvement', text: 'Complete UI/UX redesign' },
        { type: 'improvement', text: '3x faster loading times' },
        { type: 'security', text: 'Enhanced authentication system' }
      ],
      breaking: true,
      stats: {
        commits: 156,
        contributors: 4,
        filesChanged: 89
      }
    }
  ];

  const filteredEntries = selectedProduct === 'all' 
    ? changelogEntries 
    : changelogEntries.filter(entry => entry.product === selectedProduct);

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature': return Plus;
      case 'improvement': return Zap;
      case 'fix': return Bug;
      case 'security': return Shield;
      default: return Info;
    }
  };

  const getChangeColor = (type: string) => {
    switch (type) {
      case 'feature': return 'text-green-600 dark:text-green-400';
      case 'improvement': return 'text-blue-600 dark:text-blue-400';
      case 'fix': return 'text-orange-600 dark:text-orange-400';
      case 'security': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getVersionColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'minor': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'patch': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Changelog - Appnity Software Private Limited</title>
        <meta name="description" content="Stay updated with the latest changes, features, and improvements to Appnity Software Private Limited's products. Complete changelog and release notes." />
        <meta name="keywords" content="changelog, release notes, product updates, new features, bug fixes, CodeGram updates, ToolForge releases" />
        <link rel="canonical" href="https://appnity.com/changelog" />
        <meta property="og:title" content="Changelog - Appnity Software Private Limited" />
        <meta property="og:description" content="Stay updated with the latest changes and improvements to Appnity Software Private Limited's products." />
        <meta property="og:url" content="https://appnity.com/changelog" />
      </Helmet>

      <div className="min-h-screen py-20 pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl mb-6">
              <GitBranch className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Changelog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay up to date with all the latest features, improvements, and fixes 
              across our product suite. We ship fast and iterate based on your feedback.
            </p>
          </motion.div>

          {/* Product Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  selectedProduct === product.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                }`}
              >
                {product.name}
              </button>
            ))}
          </motion.div>

          {/* Changelog Entries */}
          <div className="space-y-8">
            {filteredEntries.map((entry, index) => (
              <motion.div
                key={`${entry.product}-${entry.version}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getVersionColor(entry.type)}`}>
                        {entry.version}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium capitalize">
                        {entry.product}
                      </span>
                      {entry.breaking && (
                        <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium">
                          Breaking Changes
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span className="text-sm">{entry.stats.commits} commits</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>
                </div>

                {/* Changes */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Changes List */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        What's Changed
                      </h4>
                      <div className="space-y-3">
                        {entry.changes.map((change, changeIndex) => {
                          const ChangeIcon = getChangeIcon(change.type);
                          return (
                            <div key={changeIndex} className="flex items-start space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                change.type === 'feature' ? 'bg-green-100 dark:bg-green-900/30' :
                                change.type === 'improvement' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                change.type === 'fix' ? 'bg-orange-100 dark:bg-orange-900/30' :
                                'bg-red-100 dark:bg-red-900/30'
                              }`}>
                                <ChangeIcon className={`w-3 h-3 ${getChangeColor(change.type)}`} />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {change.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Release Stats
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Commits</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {entry.stats.commits}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Contributors</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {entry.stats.contributors}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Files Changed</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {entry.stats.filesChanged}
                          </span>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                          <motion.button
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Change Types
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { type: 'feature', icon: Plus, label: 'New Features', color: 'text-green-600 dark:text-green-400' },
                { type: 'improvement', icon: Zap, label: 'Improvements', color: 'text-blue-600 dark:text-blue-400' },
                { type: 'fix', icon: Bug, label: 'Bug Fixes', color: 'text-orange-600 dark:text-orange-400' },
                { type: 'security', icon: Shield, label: 'Security', color: 'text-red-600 dark:text-red-400' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.type === 'feature' ? 'bg-green-100 dark:bg-green-900/30' :
                    item.type === 'improvement' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    item.type === 'fix' ? 'bg-orange-100 dark:bg-orange-900/30' :
                    'bg-red-100 dark:bg-red-900/30'
                  }`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center"
          >
            <Star className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get notified about new releases, features, and important updates. 
              Subscribe to our newsletter or follow us on GitHub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                Follow on GitHub
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Changelog;