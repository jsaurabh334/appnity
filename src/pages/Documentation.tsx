import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code2, 
  Rocket, 
  Settings, 
  Shield, 
  ExternalLink,
  Search,
  ArrowRight,
  CheckCircle,
  Play,
  Download,
  Github,
  Copy,
  Terminal
} from 'lucide-react';

const Documentation: React.FC = () => {
  const docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-indigo-600',
      description: 'Quick start guides and basic setup instructions',
      articles: [
        { title: 'Installation Guide', time: '5 min read', difficulty: 'Beginner' },
        { title: 'First Steps', time: '10 min read', difficulty: 'Beginner' },
        { title: 'Configuration', time: '8 min read', difficulty: 'Intermediate' },
        { title: 'Best Practices', time: '15 min read', difficulty: 'Advanced' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code2,
      color: 'from-green-600 to-teal-600',
      description: 'Complete API documentation and code examples',
      articles: [
        { title: 'Authentication', time: '12 min read', difficulty: 'Intermediate' },
        { title: 'Endpoints Overview', time: '20 min read', difficulty: 'Intermediate' },
        { title: 'Rate Limiting', time: '8 min read', difficulty: 'Advanced' },
        { title: 'Error Handling', time: '10 min read', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: Play,
      color: 'from-purple-600 to-pink-600',
      description: 'Step-by-step tutorials and practical examples',
      articles: [
        { title: 'Building Your First App', time: '30 min read', difficulty: 'Beginner' },
        { title: 'Advanced Integrations', time: '45 min read', difficulty: 'Advanced' },
        { title: 'Performance Optimization', time: '25 min read', difficulty: 'Advanced' },
        { title: 'Deployment Guide', time: '20 min read', difficulty: 'Intermediate' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Security best practices and implementation guides',
      articles: [
        { title: 'Security Overview', time: '15 min read', difficulty: 'Intermediate' },
        { title: 'Authentication & Authorization', time: '25 min read', difficulty: 'Advanced' },
        { title: 'Data Protection', time: '18 min read', difficulty: 'Advanced' },
        { title: 'Compliance Guidelines', time: '12 min read', difficulty: 'Intermediate' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'CodeGram API', url: '#', icon: Code2, description: 'Social platform API documentation' },
    { title: 'ToolForge CLI', url: '#', icon: Terminal, description: 'Command-line tool documentation' },
    { title: 'LaunchBoard SDK', url: '#', icon: Settings, description: 'Project management SDK' },
    { title: 'GitHub Repository', url: '#', icon: Github, description: 'Open source projects' }
  ];

  const codeExample = `// Example: Using CodeGram API
import { CodeGramClient } from '@appnity/codegram-sdk';

const client = new CodeGramClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Share a code snippet
const snippet = await client.snippets.create({
  title: 'React Hook Example',
  language: 'typescript',
  code: 'const [count, setCount] = useState(0);',
  tags: ['react', 'hooks', 'typescript']
});

console.log('Snippet created:', snippet.id);`;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Documentation - Appnity Software Private Limited</title>
        <meta name="description" content="Comprehensive documentation for Appnity Software Private Limited's developer tools and platforms. Get started with guides, tutorials, and API references." />
        <meta name="keywords" content="documentation, API reference, tutorials, developer guides, CodeGram API, ToolForge CLI, LaunchBoard SDK" />
        <link rel="canonical" href="https://appnity.com/documentation" />
        <meta property="og:title" content="Documentation - Appnity Software Private Limited" />
        <meta property="og:description" content="Comprehensive documentation for Appnity Software Private Limited's developer tools and platforms." />
        <meta property="og:url" content="https://appnity.com/documentation" />
      </Helmet>

      <div className="min-h-screen py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to build with Appnity Software Private Limited's tools and platforms. 
              From quick start guides to advanced integrations.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <link.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Documentation Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {docSections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <section.icon className="h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                  <p className="text-blue-100">{section.description}</p>
                </div>

                {/* Articles List */}
                <div className="p-6">
                  <div className="space-y-4">
                    {section.articles.map((article, articleIndex) => (
                      <motion.a
                        key={articleIndex}
                        href="#"
                        className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {article.title}
                            </h4>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {article.time}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Quick Start Example</h3>
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </motion.button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center"
          >
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our documentation is constantly evolving. If you can't find what you're looking for, 
              reach out to our community or support team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Join Discord Community
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                View Examples
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Documentation;