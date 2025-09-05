import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Star, Rocket, Users, Code2, TrendingUp } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      date: 'January 2025',
      title: 'Appnity Founded',
      description: 'Started with a vision to empower developers through meaningful, scalable products',
      icon: Rocket,
      status: 'completed',
      details: ['Established company vision', 'Assembled founding team', 'Secured initial funding'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      date: 'March 2025',
      title: 'CodeGram Development',
      description: 'Began development of our flagship social platform for developers',
      icon: Code2,
      status: 'completed',
      details: ['Market research completed', 'MVP architecture designed', 'Core features implemented'],
      color: 'from-green-600 to-teal-600'
    },
    {
      date: 'May 2025',
      title: 'CodeGram Beta Launch',
      description: 'Released CodeGram to beta users, gathering feedback from 500+ developers',
      icon: Users,
      status: 'completed',
      details: ['500+ beta users onboarded', 'Core features tested', 'User feedback collected'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      date: 'July 2025',
      title: 'Public Launch',
      description: 'CodeGram officially launched to the public, reaching 1K+ users in first month',
      icon: Star,
      status: 'completed',
      details: ['Public launch executed', '1K+ users in first month', 'Product-market fit achieved'],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      date: 'September 2025',
      title: 'Community Growth',
      description: '2.5K+ developers sharing code and building together',
      icon: TrendingUp,
      status: 'current',
      details: ['2.5K+ active users', '15K+ code snippets shared', 'Global community established'],
      color: 'from-cyan-600 to-blue-600'
    },
    {
      date: 'Q4 2025',
      title: 'Product Expansion',
      description: 'ToolForge and LaunchBoard entering development phase',
      icon: Rocket,
      status: 'upcoming',
      details: ['ToolForge development started', 'LaunchBoard planning phase', 'Team expansion'],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      date: 'Q1 2026',
      title: 'Platform Ecosystem',
      description: 'Launch integrated ecosystem of developer tools and platforms',
      icon: Star,
      status: 'planned',
      details: ['Multi-product ecosystem', 'Cross-platform integrations', 'Enterprise features'],
      color: 'from-pink-600 to-red-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600 border-green-600';
      case 'current':
        return 'bg-blue-600 border-blue-600 animate-pulse';
      case 'upcoming':
        return 'bg-yellow-600 border-yellow-600';
      case 'planned':
        return 'bg-gray-400 border-gray-400';
      default:
        return 'bg-gray-400 border-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 lg:ml-80">
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From a simple idea to a thriving product studio. Here's how we've grown 
            and what's coming next in our mission to empower developers.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 ${getStatusColor(milestone.status)}`}>
                  {milestone.status === 'completed' && (
                    <CheckCircle className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {milestone.status === 'current' && (
                    <Clock className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <milestone.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {milestone.date}
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          milestone.status === 'current' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          milestone.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400'
                        }`}>
                          {getStatusLabel(milestone.status)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {milestone.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {milestone.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <Rocket className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Future is Bright
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're just getting started. Our vision extends beyond individual products 
              to creating an entire ecosystem that empowers developers to build amazing things.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;