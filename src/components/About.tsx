import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Heart, 
  Users, 
  Calendar, 
  TrendingUp, 
  Award, 
  Globe, 
  Clock, 
  Rocket, 
  CheckCircle,
  Star,
  Code2,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: 'Fast Iteration',
      description: 'We move quickly from idea to MVP, learning and improving with each cycle.',
      metric: '2-4 weeks',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Clean Design',
      description: 'Beautiful, intuitive interfaces that developers and users love to interact with.',
      metric: '4.9/5 rating',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Developer Empathy',
      description: 'Built by developers, for developers. We understand the tools and workflows that matter.',
      metric: '2.5K+ users',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Target,
      title: 'Focused Vision',
      description: 'We prioritize what matters most, avoiding feature bloat and maintaining clear direction.',
      metric: '99.9% uptime',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Appnity Founded',
      description: 'Started with a vision to empower developers through meaningful products',
      status: 'completed',
      achievements: ['Company established', 'Team assembled', 'Vision defined']
    },
    {
      year: 'Q2 2025',
      title: 'CodeGram Launched',
      description: 'Our flagship social platform for developers goes live',
      status: 'completed',
      achievements: ['MVP developed', 'Beta testing', 'Public launch']
    },
    {
      year: 'Q3 2025',
      title: 'Growing Community',
      description: '2.5K+ developers sharing code and building together',
      status: 'current',
      achievements: ['Community growth', 'Feature expansion', 'User feedback integration']
    },
    {
      year: 'Q4 2025',
      title: 'Next Products',
      description: 'ToolForge and LaunchBoard entering development',
      status: 'upcoming',
      achievements: ['Product planning', 'Development start', 'Team expansion']
    }
  ];

  const stats = [
    { icon: Globe, label: 'Global Reach', value: '50+ Countries', color: 'from-purple-600 to-pink-600' },
    { icon: Clock, label: 'Response Time', value: '< 24 hours', color: 'from-blue-600 to-indigo-600' },
    { icon: Award, label: 'Success Rate', value: '98%', color: 'from-green-600 to-teal-600' },
    { icon: TrendingUp, label: 'Growth Rate', value: '+150% MoM', color: 'from-orange-600 to-red-600' }
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
            <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About Appnity
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build thoughtfully designed digital products that empower developers, 
            designers, and indie builders to create amazing things.
          </p>
        </motion.div>

        {/* Stats Grid - Mobile Optimized */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center mb-12 sm:mb-16 lg:mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Rocket className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 opacity-90" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              To empower the next generation of digital creators by building tools and platforms 
              that enhance productivity, foster community, and enable innovation. We believe great 
              software should be intuitive, powerful, and accessible to everyone.
            </p>
          </div>
        </motion.div>

        {/* Values - Mobile Optimized */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
          >
            Our Values
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mx-auto sm:mx-0`}>
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                        {value.title}
                      </h4>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full inline-block">
                        {value.metric}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline - Mobile Optimized */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
          >
            Our Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 hidden sm:block"></div>

            <div className="space-y-6 sm:space-y-8">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  {/* Timeline Dot - Adjusted for mobile */}
                  <div className={`absolute left-4 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 z-10 ${
                    milestone.status === 'completed' ? 'bg-green-600' :
                    milestone.status === 'current' ? 'bg-blue-600 animate-pulse' : 
                    milestone.status === 'upcoming' ? 'bg-yellow-600' : 'bg-gray-400'
                  }`}>
                    {milestone.status === 'completed' && (
                      <CheckCircle className="w-2 h-2 sm:w-4 sm:h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  
                  {/* Content - Adjusted spacing for mobile */}
                  <div className="ml-12 sm:ml-16 bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 w-full hover:shadow-xl transition-shadow">
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {milestone.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {milestone.year}
                        </span>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium inline-block ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          milestone.status === 'current' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          milestone.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400'
                        }`}>
                          {milestone.status === 'completed' ? 'Completed' :
                           milestone.status === 'current' ? 'In Progress' : 
                           milestone.status === 'upcoming' ? 'Upcoming' : 'Planned'}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                      {milestone.description}
                    </p>
                    
                    {/* Achievements - Mobile Stack */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        Key Achievements:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;