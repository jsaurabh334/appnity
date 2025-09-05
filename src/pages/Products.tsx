import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Star, 
  Users, 
  Activity,
  Clock,
  Wrench,
  BarChart3,
  Zap
} from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'CodeGram',
      description: 'Social media platform for developers to share code snippets, discover solutions, and connect with the global developer community.',
      status: 'Live',
      tech: ['React', 'TypeScript', 'Prisma', 'Supabase', 'TailwindCSS'],
      icon: Code2,
      gradient: 'from-blue-600 to-indigo-600',
      stats: {
        users: '2.5K+',
        snippets: '15K+',
        languages: '25+'
      },
      features: [
        'Code snippet sharing',
        'Syntax highlighting',
        'Community voting',
        'Developer profiles',
        'Real-time comments'
      ]
    },
    {
      id: 2,
      name: 'ToolX',
      description: 'AI-powered CLI tool that helps developers streamline their workflow with intelligent automation and smart suggestions.',
      status: 'Coming Soon',
      tech: ['Node.js', 'TypeScript', 'OpenAI', 'Commander.js'],
      icon: Wrench,
      gradient: 'from-green-600 to-teal-600',
      stats: {
        features: '50+',
        integrations: '20+',
        commands: '100+'
      },
      features: [
        'Intelligent code generation',
        'Workflow automation',
        'Git integration',
        'Package management',
        'Custom templates'
      ]
    },
    {
      id: 3,
      name: 'LaunchBoard',
      description: 'Comprehensive workflow dashboard designed specifically for indie developers and small teams to manage projects efficiently.',
      status: 'In Beta',
      tech: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      icon: BarChart3,
      gradient: 'from-purple-600 to-pink-600',
      stats: {
        projects: '500+',
        teams: '150+',
        tasks: '10K+'
      },
      features: [
        'Project management',
        'Time tracking',
        'Team collaboration',
        'Analytics dashboard',
        'Integration hub'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'In Beta':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Coming Soon':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We build tools and platforms that empower developers and creators. 
            Each product is crafted with attention to detail and real-world utility.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mr-4`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {product.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {product.status === 'Live' && (
                      <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit App
                      </button>
                    )}
                    <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 dark:bg-gray-700/50 p-8 lg:p-12 flex items-center">
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                      Product Stats
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Visual Element */}
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Progress</span>
                        <span>{product.status === 'Live' ? '100%' : product.status === 'In Beta' ? '80%' : '25%'}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${product.gradient}`}
                          style={{ 
                            width: product.status === 'Live' ? '100%' : product.status === 'In Beta' ? '80%' : '25%' 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-12"
        >
          <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More Products Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're constantly building new tools and platforms. Have an idea or want to collaborate? 
            We'd love to hear from you.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Suggest a Product
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;