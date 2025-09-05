import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Code2, Globe, Clock, Award, Zap, Heart } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '2.5K+',
      label: 'Active Developers',
      description: 'Growing community of passionate builders',
      color: 'from-blue-600 to-indigo-600',
      trend: '+150%'
    },
    {
      icon: Code2,
      value: '15K+',
      label: 'Code Snippets',
      description: 'Shared and discovered on CodeGram',
      color: 'from-green-600 to-teal-600',
      trend: '+89%'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global reach across continents',
      color: 'from-purple-600 to-pink-600',
      trend: '+200%'
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable infrastructure and monitoring',
      color: 'from-orange-600 to-red-600',
      trend: 'Stable'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'User Rating',
      description: 'Exceptional user satisfaction',
      color: 'from-yellow-600 to-orange-600',
      trend: '+0.2'
    },
    {
      icon: Zap,
      value: '2-4',
      label: 'Weeks to MVP',
      description: 'Rapid development and deployment',
      color: 'from-cyan-600 to-blue-600',
      trend: 'Consistent'
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 lg:ml-80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Appnity by the Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real metrics that showcase our impact on the developer community and 
            the quality of products we deliver.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                {/* Value and Trend */}
                <div className="flex items-end justify-between mb-4">
                  <motion.div
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{stat.trend}</span>
                  </div>
                </div>

                {/* Label and Description */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Trusted by developers worldwide</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;