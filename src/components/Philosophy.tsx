import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Repeat, 
  TrendingUp,
  Zap,
  CheckCircle,
  Users,
  Clock,
  Target,
  Award,
  Globe,
  Shield
} from 'lucide-react';

const Philosophy: React.FC = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Idea',
      description: 'Market research and concept validation',
      duration: '1-2 weeks',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'User experience and interface design',
      duration: '1-2 weeks',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'MVP',
      description: 'Rapid prototyping and core features',
      duration: '2-4 weeks',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: TestTube,
      title: 'Feedback',
      description: 'User testing and community input',
      duration: '1 week',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Repeat,
      title: 'Iterate',
      description: 'Continuous improvement and refinement',
      duration: 'Ongoing',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'Growth optimization and new features',
      duration: 'Ongoing',
      color: 'from-emerald-500 to-cyan-500'
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend', proficiency: 95, experience: '5+ years' },
    { name: 'TypeScript', category: 'Language', proficiency: 90, experience: '4+ years' },
    { name: 'Node.js', category: 'Backend', proficiency: 88, experience: '5+ years' },
    { name: 'PostgreSQL', category: 'Database', proficiency: 85, experience: '4+ years' },
    { name: 'Tailwind', category: 'Styling', proficiency: 92, experience: '3+ years' },
    { name: 'Prisma', category: 'ORM', proficiency: 87, experience: '2+ years' },
    { name: 'Supabase', category: 'Backend', proficiency: 89, experience: '2+ years' },
    { name: 'Vercel', category: 'Hosting', proficiency: 93, experience: '3+ years' }
  ];

  const principles = [
    {
      icon: Users,
      title: 'Developer-First',
      description: 'Every decision is made with developers in mind',
      metric: '2.5K+ developers served',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description: 'Fast delivery without compromising excellence',
      metric: '2-4 weeks to MVP',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: Target,
      title: 'Focused Execution',
      description: 'Clear priorities and streamlined development',
      metric: '99.9% uptime',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Award,
      title: 'Community Driven',
      description: 'Built with and for the developer community',
      metric: '4.9/5 satisfaction',
      color: 'from-purple-600 to-pink-600'
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
    <section id="philosophy" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            How We Build
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our streamlined process focuses on rapid iteration, user feedback, 
            and building products that developers actually want to use.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {step.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  {step.duration}
                </div>
              </div>
              
              {/* Connection Line */}
              {index < processSteps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Our Tech Stack
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.category} • {tech.experience}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {tech.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Our Principles
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {principle.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Culture & Remote Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Remote-First Culture</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We believe great work happens when people have the freedom to work from anywhere. 
              Our async-first approach enables deep work and global collaboration.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Remote Team</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Global Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Async</div>
                <div className="text-blue-100">Communication</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;