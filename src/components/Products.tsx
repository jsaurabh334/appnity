import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Users, 
  Activity,
  Wrench,
  BarChart3,
  Star,
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  Sparkles,
  Play,
  Eye
} from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'CodeGram',
      description: 'A social media platform for developers to share code snippets, discover solutions, and connect with the global developer community.',
      status: 'Live',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      tech: ['React', 'TypeScript', 'Prisma', 'Supabase', 'TailwindCSS'],
      icon: Code2,
      gradient: 'from-blue-600 to-indigo-600',
      stats: {
        users: '2.5K+',
        snippets: '15K+',
        languages: '25+'
      },
      features: [
        'Code snippet sharing with syntax highlighting',
        'Community voting and discussions',
        'Developer profiles and portfolios',
        'Real-time collaboration features',
        'Advanced search and filtering'
      ],
      metrics: {
        uptime: '99.9%',
        responseTime: '< 200ms',
        satisfaction: '4.9/5'
      },
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'ToolForge',
      description: 'AI-powered CLI tool builder that helps developers create custom command-line tools with intelligent automation and smart suggestions.',
      status: 'Coming Soon',
      statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      tech: ['Node.js', 'TypeScript', 'OpenAI', 'Commander.js'],
      icon: Wrench,
      gradient: 'from-green-600 to-teal-600',
      stats: {
        features: '50+',
        integrations: '20+',
        templates: '100+'
      },
      features: [
        'AI-powered code generation',
        'Custom CLI tool templates',
        'Git and package manager integration',
        'Workflow automation scripts',
        'Cross-platform compatibility'
      ],
      metrics: {
        eta: 'Q4 2025',
        betaUsers: '500+',
        completion: '75%'
      },
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'LaunchBoard',
      description: 'Comprehensive project dashboard designed specifically for indie developers and small teams to manage projects efficiently.',
      status: 'In Development',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      tech: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      icon: BarChart3,
      gradient: 'from-purple-600 to-pink-600',
      stats: {
        projects: '500+',
        teams: '150+',
        tasks: '10K+'
      },
      features: [
        'Project management and tracking',
        'Team collaboration tools',
        'Analytics and reporting dashboard',
        'Third-party integrations hub',
        'Time tracking and billing'
      ],
      metrics: {
        eta: 'Q1 2026',
        betaUsers: '200+',
        completion: '45%'
      },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build tools and platforms that empower developers and creators. 
            Each product is crafted with attention to detail and real-world utility.
          </p>
        </motion.div>

        {/* Featured Product - CodeGram - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              {/* Mobile-first layout */}
              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                    <div className="flex items-center mb-3 sm:mb-0 sm:mr-4">
                      <Code2 className="h-8 w-8 sm:h-12 sm:w-12 mr-3 sm:mr-4" />
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">CodeGram</h3>
                        <p className="text-sm sm:text-base text-blue-100">Social media for developers</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Live
                    </span>
                  </div>
                  
                  <p className="text-base sm:text-lg text-blue-50 mb-4 sm:mb-6 leading-relaxed">
                    Share code snippets, discover solutions, and connect with developers 
                    worldwide. Built with modern technologies and designed for the 
                    developer community.
                  </p>

                  {/* Tech Stack - Mobile Optimized */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-semibold mb-2 sm:mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {products[0].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-white/20 rounded-lg text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats - Mobile Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {Object.entries(products[0].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg sm:text-2xl font-bold">{value}</div>
                        <div className="text-blue-100 text-xs sm:text-sm capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions - Mobile Stack */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.button
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Visit CodeGram
                    </motion.button>
                    <motion.button
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      View Code
                    </motion.button>
                  </div>
                </div>

                {/* Visual - Mobile Optimized */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <img
                      src={products[0].image}
                      alt="CodeGram Preview"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl lg:rounded-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl lg:rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {Object.entries(products[0].metrics).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-white">
                            <div className="flex items-center mb-1">
                              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              <span className="text-sm sm:text-base font-bold">{value}</span>
                            </div>
                            <div className="text-xs opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Products - Mobile Optimized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 mb-12 sm:mb-16"
        >
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 group hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} Preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${product.statusColor}`}>
                    {product.status === 'Coming Soon' && <Clock className="w-3 h-3 mr-1" />}
                    {product.status === 'In Development' && <Wrench className="w-3 h-3 mr-1" />}
                    {product.status}
                  </span>
                </div>

                {/* Product Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                    <product.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Preview</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features - Mobile Optimized */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Stats Grid - Mobile Optimized */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 mb-4 sm:mb-6">
                  {Object.entries(product.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-blue-600 dark:text-blue-400">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons - Mobile Stack */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.button
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {product.status === 'Coming Soon' ? (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Notify Me
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Try Beta
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Roadmap - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Product Roadmap
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { quarter: 'Q4 2025', title: 'ToolForge Beta', status: 'In Progress', progress: 75 },
              { quarter: 'Q1 2026', title: 'LaunchBoard Alpha', status: 'Planning', progress: 25 },
              { quarter: 'Q2 2026', title: 'Mobile Apps', status: 'Research', progress: 10 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2">
                  {item.quarter}
                </p>
                <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                  item.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400'
                }`}>
                  {item.status}
                </span>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Teaser - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <Star className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            More Products Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We're constantly building new tools and platforms. Have an idea or want to collaborate? 
            We'd love to hear from you.
          </p>
          <motion.button
            className="inline-flex items-center px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Suggest a Product
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;