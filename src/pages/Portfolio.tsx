import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Code2,
  Smartphone,
  Globe,
  Database,
  Zap,
  Award,
  Target,
  Clock,
  Star,
  ArrowRight,
  Filter,
  CheckCircle
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 8 },
    { id: 'web', name: 'Web Apps', count: 4 },
    { id: 'mobile', name: 'Mobile Apps', count: 2 },
    { id: 'saas', name: 'SaaS Platforms', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'CodeGram',
      subtitle: 'Social Media for Developers',
      description: 'A comprehensive social platform where developers share code snippets, discover solutions, and build meaningful connections within the global developer community.',
      category: 'web',
      type: 'Internal Product',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['React', 'TypeScript', 'Prisma', 'Supabase', 'TailwindCSS'],
      duration: '6 months',
      team: '3 developers',
      status: 'Live',
      metrics: {
        users: '2.5K+',
        snippets: '15K+',
        uptime: '99.9%'
      },
      features: [
        'Real-time collaborative editing',
        'Syntax highlighting for 25+ languages',
        'Community voting and discussions',
        'Developer profile portfolios',
        'Advanced search and filtering'
      ],
      challenges: [
        'Real-time collaboration implementation',
        'Scalable syntax highlighting',
        'Community moderation system'
      ],
      results: [
        '2.5K+ active developers',
        '15K+ code snippets shared',
        '4.9/5 user satisfaction rating'
      ]
    },
    {
      id: 2,
      title: 'TechFlow CRM',
      subtitle: 'Customer Relationship Management',
      description: 'A modern CRM platform built for tech companies, featuring advanced analytics, automated workflows, and seamless integrations.',
      category: 'saas',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
      duration: '4 months',
      team: '4 developers',
      status: 'Delivered',
      metrics: {
        users: '500+',
        deals: '$2M+',
        efficiency: '+40%'
      },
      features: [
        'Advanced lead management',
        'Automated email sequences',
        'Sales pipeline visualization',
        'Custom reporting dashboard',
        'Third-party integrations'
      ],
      challenges: [
        'Complex data migration',
        'Custom reporting engine',
        'Multi-tenant architecture'
      ],
      results: [
        '40% increase in sales efficiency',
        '$2M+ in tracked deals',
        '500+ active users'
      ]
    },
    {
      id: 3,
      title: 'FitTracker Pro',
      subtitle: 'Fitness & Wellness Mobile App',
      description: 'A comprehensive fitness tracking application with workout planning, nutrition tracking, and social features for fitness enthusiasts.',
      category: 'mobile',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Stripe', 'HealthKit'],
      duration: '5 months',
      team: '3 developers',
      status: 'Delivered',
      metrics: {
        downloads: '10K+',
        rating: '4.8/5',
        retention: '75%'
      },
      features: [
        'Workout planning and tracking',
        'Nutrition and calorie tracking',
        'Social challenges and leaderboards',
        'Wearable device integration',
        'Personal trainer matching'
      ],
      challenges: [
        'HealthKit integration complexity',
        'Real-time sync across devices',
        'Offline functionality'
      ],
      results: [
        '10K+ app downloads',
        '4.8/5 App Store rating',
        '75% user retention rate'
      ]
    },
    {
      id: 4,
      title: 'EduPlatform',
      subtitle: 'Online Learning Management System',
      description: 'A modern LMS platform for educational institutions with course management, student tracking, and interactive learning tools.',
      category: 'web',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      duration: '8 months',
      team: '5 developers',
      status: 'Delivered',
      metrics: {
        students: '5K+',
        courses: '200+',
        completion: '85%'
      },
      features: [
        'Course creation and management',
        'Interactive video lessons',
        'Real-time chat and discussions',
        'Progress tracking and analytics',
        'Certificate generation'
      ],
      challenges: [
        'Video streaming optimization',
        'Real-time collaboration features',
        'Scalable assessment system'
      ],
      results: [
        '5K+ active students',
        '200+ courses created',
        '85% course completion rate'
      ]
    },
    {
      id: 5,
      title: 'FinanceFlow',
      subtitle: 'Personal Finance Management',
      description: 'A comprehensive personal finance app with expense tracking, budget planning, investment monitoring, and financial goal setting.',
      category: 'mobile',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['Flutter', 'Dart', 'Firebase', 'Plaid API', 'Chart.js'],
      duration: '6 months',
      team: '4 developers',
      status: 'Delivered',
      metrics: {
        users: '8K+',
        transactions: '100K+',
        savings: '$500K+'
      },
      features: [
        'Bank account integration',
        'Expense categorization',
        'Budget planning and alerts',
        'Investment portfolio tracking',
        'Financial goal setting'
      ],
      challenges: [
        'Bank API integrations',
        'Data security compliance',
        'Real-time transaction sync'
      ],
      results: [
        '8K+ active users',
        '100K+ transactions tracked',
        '$500K+ in user savings'
      ]
    },
    {
      id: 6,
      title: 'CloudSync Pro',
      subtitle: 'File Synchronization Platform',
      description: 'Enterprise-grade file synchronization and collaboration platform with advanced security, version control, and team management.',
      category: 'saas',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3'],
      duration: '7 months',
      team: '6 developers',
      status: 'Delivered',
      metrics: {
        storage: '10TB+',
        users: '1.2K+',
        uptime: '99.95%'
      },
      features: [
        'Real-time file synchronization',
        'Version control and history',
        'Team collaboration tools',
        'Advanced security features',
        'API for third-party integrations'
      ],
      challenges: [
        'Large file handling',
        'Conflict resolution system',
        'Enterprise security requirements'
      ],
      results: [
        '10TB+ data synchronized',
        '1.2K+ enterprise users',
        '99.95% uptime achieved'
      ]
    },
    {
      id: 7,
      title: 'RetailHub',
      subtitle: 'E-commerce Management Platform',
      description: 'Complete e-commerce solution with inventory management, order processing, customer analytics, and multi-channel selling capabilities.',
      category: 'web',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['React', 'Express.js', 'MySQL', 'Stripe', 'Shopify API'],
      duration: '9 months',
      team: '5 developers',
      status: 'Delivered',
      metrics: {
        revenue: '$1M+',
        orders: '25K+',
        merchants: '150+'
      },
      features: [
        'Multi-channel inventory management',
        'Automated order processing',
        'Customer analytics dashboard',
        'Payment gateway integration',
        'Mobile-responsive storefront'
      ],
      challenges: [
        'Multi-channel synchronization',
        'Payment processing compliance',
        'Scalable inventory system'
      ],
      results: [
        '$1M+ in processed revenue',
        '25K+ orders fulfilled',
        '150+ active merchants'
      ]
    },
    {
      id: 8,
      title: 'HealthConnect',
      subtitle: 'Telemedicine Platform',
      description: 'HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video consultations and health monitoring.',
      category: 'web',
      type: 'Client Project',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      duration: '10 months',
      team: '6 developers',
      status: 'Delivered',
      metrics: {
        consultations: '15K+',
        providers: '200+',
        satisfaction: '4.7/5'
      },
      features: [
        'Secure video consultations',
        'Electronic health records',
        'Appointment scheduling',
        'Prescription management',
        'Health monitoring integration'
      ],
      challenges: [
        'HIPAA compliance implementation',
        'Real-time video optimization',
        'Electronic health record integration'
      ],
      results: [
        '15K+ consultations completed',
        '200+ healthcare providers',
        '4.7/5 patient satisfaction'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: Briefcase, label: 'Projects Completed', value: '50+', color: 'from-blue-600 to-indigo-600' },
    { icon: Users, label: 'Happy Clients', value: '25+', color: 'from-green-600 to-teal-600' },
    { icon: Award, label: 'Success Rate', value: '98%', color: 'from-purple-600 to-pink-600' },
    { icon: Globe, label: 'Countries Served', value: '15+', color: 'from-orange-600 to-red-600' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'saas': return Database;
      default: return Code2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'mobile': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'saas': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Delivered': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Client Projects by Appnity Software Private Limited</title>
        <meta name="description" content="Explore Appnity Software Private Limited's portfolio of successful client projects including web applications, mobile apps, and SaaS platforms." />
        <meta name="keywords" content="portfolio, client projects, web development, mobile apps, SaaS platforms, case studies, project showcase" />
        <link rel="canonical" href="https://appnity.com/portfolio" />
        <meta property="og:title" content="Portfolio - Client Projects by Appnity Software Private Limited" />
        <meta property="og:description" content="Explore our portfolio of successful client projects and case studies." />
        <meta property="og:url" content="https://appnity.com/portfolio" />
      </Helmet>

      <div className="min-h-screen py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing successful projects we've built for clients and our own products. 
              Each project represents our commitment to quality, innovation, and user experience.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {project.category.toUpperCase()}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Type */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        {project.type}
                      </span>
                    </div>

                    {/* Key Metrics */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white text-center">
                            <div className="text-sm font-bold">{value}</div>
                            <div className="text-xs opacity-90 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        {project.team}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Project
                      </motion.button>
                      <motion.button
                        className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center"
          >
            <Target className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and see how we can help bring 
              your vision to life with our proven development process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Start a Project
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="mr-2 h-5 w-5" />
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;