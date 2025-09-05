import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Zap, 
  Heart, 
  Users, 
  Code2,
  Calendar,
  MapPin,
  Award,
  Globe,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Appnity Founded',
      description: 'Started with a vision to empower developers through meaningful, scalable products',
      status: 'completed',
      achievements: ['Company established', 'Team assembled', 'Vision defined']
    },
    {
      year: 'Mar 2025',
      title: 'First Product Ideation',
      description: 'Began development of CodeGram after identifying gaps in developer social platforms',
      status: 'completed',
      achievements: ['Market research', 'Product planning', 'Technical architecture']
    },
    {
      year: 'May 2025',
      title: 'CodeGram Beta Launch',
      description: 'Released CodeGram to beta users, gathering feedback from 500+ developers',
      status: 'completed',
      achievements: ['Beta release', '500+ users', 'Feedback collection']
    },
    {
      year: 'Jul 2025',
      title: 'CodeGram Public Launch',
      description: 'Officially launched CodeGram to the public, reaching 1K+ users in first month',
      status: 'completed',
      achievements: ['Public launch', '1K+ users', 'Product-market fit']
    },
    {
      year: 'Present',
      title: 'Expanding Portfolio',
      description: 'Building our next products while scaling CodeGram and growing our community',
      status: 'current',
      achievements: ['2.5K+ users', 'Product expansion', 'Team growth']
    }
  ];

  const values = [
    {
      icon: Code2,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to create cutting-edge solutions that solve real problems.',
      metric: '30+ Technologies',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'We move fast and iterate quickly, believing that rapid feedback loops lead to better products.',
      metric: '2-4 weeks to MVP',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We build with and for the developer community, fostering connections and collaboration.',
      metric: '2.5K+ developers',
      color: 'from-pink-600 to-red-600'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'We prioritize what matters most, avoiding feature bloat and maintaining clear product vision.',
      metric: '99.9% uptime',
      color: 'from-green-600 to-teal-600'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Full-stack developer with 8+ years of experience building developer tools and platforms.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      skills: ['React', 'TypeScript', 'Product Strategy']
    },
    {
      name: 'Sarah Kim',
      role: 'Lead Designer',
      bio: 'UX/UI designer passionate about creating intuitive experiences for technical audiences.',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      skills: ['Figma', 'User Research', 'Design Systems']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Senior Developer',
      bio: 'Backend specialist with expertise in scalable architectures and database optimization.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      skills: ['Node.js', 'PostgreSQL', 'DevOps']
    }
  ];

  const stats = [
    { icon: Globe, label: 'Global Reach', value: '50+ Countries', color: 'from-purple-600 to-pink-600' },
    { icon: Users, label: 'Active Users', value: '2.5K+', color: 'from-blue-600 to-indigo-600' },
    { icon: Code2, label: 'Code Snippets', value: '15K+', color: 'from-green-600 to-teal-600' },
    { icon: Award, label: 'User Rating', value: '4.9/5', color: 'from-yellow-600 to-orange-600' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>About Appnity Software Private Limited - Modern Product Studio for Developers</title>
        <meta name="description" content="Learn about Appnity Software Private Limited's mission to empower developers through meaningful, scalable digital products. Meet our team and discover our journey." />
        <meta name="keywords" content="about appnity, product studio, developer tools, team, mission, values, company story" />
        <link rel="canonical" href="https://appnity.com/about" />
        <meta property="og:title" content="About Appnity Software Private Limited - Modern Product Studio for Developers" />
        <meta property="og:description" content="Learn about Appnity Software Private Limited's mission to empower developers through meaningful, scalable digital products." />
        <meta property="og:url" content="https://appnity.com/about" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Appnity
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're a product studio on a mission to empower developers and indie builders 
              through meaningful, scalable digital products.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <Rocket className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                  To empower developers and indie builders by creating tools and platforms that 
                  enhance productivity, foster community, and enable innovation. We believe that 
                  great software should be built by developers, for developers.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Timeline */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              Our Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 hidden md:block"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center"
                  >
                    {/* Timeline Dot */}
                    <div className={`hidden md:flex absolute left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
                      milestone.status === 'completed' ? 'bg-green-600' :
                      milestone.status === 'current' ? 'bg-blue-600 animate-pulse' : 'bg-gray-400'
                    }`}>
                      {milestone.status === 'completed' && (
                        <CheckCircle className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="md:ml-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 w-full hover:shadow-xl transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {milestone.year}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            milestone.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            milestone.status === 'current' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400'
                          }`}>
                            {milestone.status === 'completed' ? 'Completed' :
                             milestone.status === 'current' ? 'In Progress' : 'Planned'}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {milestone.description}
                      </p>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {milestone.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
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
          </section>

          {/* Values */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              Our Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {value.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {value.metric}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              Meet Our Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final Stats */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Appnity by the Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400">Products Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2.5K+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15K+</div>
                <div className="text-gray-600 dark:text-gray-400">Code Snippets Shared</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default About;