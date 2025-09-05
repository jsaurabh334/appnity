import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Users, 
  TrendingUp, 
  Clock, 
  Star, 
  ExternalLink, 
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
  Target,
  Zap,
  Award
} from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const caseStudies = [
    {
      id: 'codegram',
      title: 'CodeGram',
      subtitle: 'Social Platform for Developers',
      description: 'A comprehensive social media platform designed specifically for developers to share code snippets, discover solutions, and build meaningful connections.',
      challenge: 'Developers needed a dedicated platform to share code snippets and collaborate, but existing solutions were either too generic or lacked proper developer-focused features.',
      solution: 'We built CodeGram with syntax highlighting, community voting, real-time collaboration, and developer-specific features that make code sharing intuitive and engaging.',
      results: [
        { metric: '2.5K+', label: 'Active Users', icon: Users },
        { metric: '15K+', label: 'Code Snippets', icon: Code2 },
        { metric: '4.9/5', label: 'User Rating', icon: Star },
        { metric: '99.9%', label: 'Uptime', icon: TrendingUp }
      ],
      timeline: '6 months from concept to launch',
      techStack: ['React', 'TypeScript', 'Prisma', 'Supabase', 'TailwindCSS'],
      features: [
        'Syntax highlighting for 25+ languages',
        'Real-time collaborative editing',
        'Community voting and discussions',
        'Developer profile portfolios',
        'Advanced search and filtering',
        'Mobile-responsive design'
      ],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'toolforge',
      title: 'ToolForge',
      subtitle: 'AI-Powered CLI Builder',
      description: 'An intelligent command-line tool builder that helps developers create custom CLI tools with AI assistance and smart automation.',
      challenge: 'Creating custom CLI tools required extensive boilerplate code and deep knowledge of command-line interfaces, making it inaccessible to many developers.',
      solution: 'ToolForge uses AI to generate CLI tools based on natural language descriptions, providing templates, automation scripts, and intelligent suggestions.',
      results: [
        { metric: '500+', label: 'Beta Users', icon: Users },
        { metric: '100+', label: 'Templates', icon: Code2 },
        { metric: '75%', label: 'Completion', icon: Target },
        { metric: 'Q4 2025', label: 'Launch Date', icon: Clock }
      ],
      timeline: '4 months development (in progress)',
      techStack: ['Node.js', 'TypeScript', 'OpenAI', 'Commander.js', 'Inquirer'],
      features: [
        'AI-powered code generation',
        'Custom CLI tool templates',
        'Git and package manager integration',
        'Workflow automation scripts',
        'Cross-platform compatibility',
        'Plugin ecosystem'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'launchboard',
      title: 'LaunchBoard',
      subtitle: 'Project Dashboard for Indie Developers',
      description: 'A comprehensive project management dashboard designed specifically for indie developers and small teams to manage projects efficiently.',
      challenge: 'Indie developers and small teams needed a project management solution that understood their unique workflows and constraints.',
      solution: 'LaunchBoard provides project tracking, time management, team collaboration, and analytics specifically tailored for developer workflows and indie projects.',
      results: [
        { metric: '200+', label: 'Beta Users', icon: Users },
        { metric: '45%', label: 'Completion', icon: Target },
        { metric: 'Q1 2026', label: 'Launch Date', icon: Clock },
        { metric: '10+', label: 'Integrations', icon: Zap }
      ],
      timeline: '6 months development (planning)',
      techStack: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'Framer Motion'],
      features: [
        'Project management and tracking',
        'Time tracking and billing',
        'Team collaboration tools',
        'Analytics and reporting dashboard',
        'Third-party integrations hub',
        'Custom workflow automation'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const currentStudy = caseStudies[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
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
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deep dives into our products, the challenges we solved, and the impact 
            we've made in the developer community.
          </p>
        </motion.div>

        {/* Case Study Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${currentStudy.color} rounded-xl mb-6`}>
                      <Code2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentStudy.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {currentStudy.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    {currentStudy.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Target className="h-5 w-5 text-red-600 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {currentStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Zap className="h-5 w-5 text-green-600 mr-2" />
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {currentStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-medium">{currentStudy.timeline}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.button
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentStudy.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Live
                    </motion.button>
                    <motion.button
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source Code
                    </motion.button>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-4">
                      {currentStudy.results.map((result, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                          <div className="flex items-center mb-2">
                            <result.icon className="h-5 w-5 mr-2" />
                            <span className="text-2xl font-bold">{result.metric}</span>
                          </div>
                          <div className="text-sm opacity-90">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeSlide
                      ? 'bg-blue-600 dark:bg-blue-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Features of {currentStudy.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudy.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <div className={`w-8 h-8 bg-gradient-to-r ${currentStudy.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;