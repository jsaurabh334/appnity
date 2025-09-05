import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, Palette, Wrench, Shield, Zap, CheckCircle } from 'lucide-react';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code2,
      color: 'from-blue-600 to-indigo-600',
      description: 'Modern UI frameworks and libraries'
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Database,
      color: 'from-green-600 to-teal-600',
      description: 'Scalable server-side technologies'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: Cloud,
      color: 'from-purple-600 to-pink-600',
      description: 'Cloud platforms and deployment'
    },
    {
      id: 'design',
      name: 'Design',
      icon: Palette,
      color: 'from-orange-600 to-red-600',
      description: 'Design tools and systems'
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: Wrench,
      color: 'from-cyan-600 to-blue-600',
      description: 'Development and productivity tools'
    },
    {
      id: 'security',
      name: 'Security',
      icon: Shield,
      color: 'from-yellow-600 to-orange-600',
      description: 'Security and monitoring solutions'
    }
  ];

  const technologies = {
    frontend: [
      { name: 'React', proficiency: 95, description: 'Component-based UI library', experience: '5+ years' },
      { name: 'TypeScript', proficiency: 92, description: 'Type-safe JavaScript', experience: '4+ years' },
      { name: 'Next.js', proficiency: 88, description: 'Full-stack React framework', experience: '3+ years' },
      { name: 'Tailwind CSS', proficiency: 94, description: 'Utility-first CSS framework', experience: '3+ years' },
      { name: 'Framer Motion', proficiency: 85, description: 'Animation library for React', experience: '2+ years' },
      { name: 'Vite', proficiency: 90, description: 'Fast build tool and dev server', experience: '2+ years' }
    ],
    backend: [
      { name: 'Node.js', proficiency: 90, description: 'JavaScript runtime environment', experience: '5+ years' },
      { name: 'PostgreSQL', proficiency: 87, description: 'Advanced relational database', experience: '4+ years' },
      { name: 'Prisma', proficiency: 89, description: 'Next-generation ORM', experience: '2+ years' },
      { name: 'Supabase', proficiency: 85, description: 'Open source Firebase alternative', experience: '2+ years' },
      { name: 'GraphQL', proficiency: 82, description: 'Query language for APIs', experience: '3+ years' },
      { name: 'Redis', proficiency: 78, description: 'In-memory data structure store', experience: '2+ years' }
    ],
    infrastructure: [
      { name: 'Vercel', proficiency: 93, description: 'Frontend deployment platform', experience: '3+ years' },
      { name: 'AWS', proficiency: 85, description: 'Cloud computing services', experience: '4+ years' },
      { name: 'Docker', proficiency: 82, description: 'Containerization platform', experience: '3+ years' },
      { name: 'GitHub Actions', proficiency: 88, description: 'CI/CD automation', experience: '3+ years' },
      { name: 'Cloudflare', proficiency: 80, description: 'CDN and security services', experience: '2+ years' },
      { name: 'PlanetScale', proficiency: 75, description: 'Serverless MySQL platform', experience: '1+ years' }
    ],
    design: [
      { name: 'Figma', proficiency: 90, description: 'Collaborative design tool', experience: '4+ years' },
      { name: 'Adobe Creative Suite', proficiency: 85, description: 'Professional design software', experience: '5+ years' },
      { name: 'Sketch', proficiency: 80, description: 'Digital design toolkit', experience: '3+ years' },
      { name: 'Principle', proficiency: 75, description: 'Interactive design tool', experience: '2+ years' },
      { name: 'Lottie', proficiency: 78, description: 'Animation library', experience: '2+ years' },
      { name: 'Storybook', proficiency: 82, description: 'Component development tool', experience: '2+ years' }
    ],
    tools: [
      { name: 'VS Code', proficiency: 95, description: 'Code editor and IDE', experience: '5+ years' },
      { name: 'Git', proficiency: 92, description: 'Version control system', experience: '6+ years' },
      { name: 'Linear', proficiency: 88, description: 'Issue tracking and project management', experience: '2+ years' },
      { name: 'Postman', proficiency: 85, description: 'API development and testing', experience: '4+ years' },
      { name: 'Notion', proficiency: 90, description: 'Documentation and knowledge management', experience: '3+ years' },
      { name: 'Slack', proficiency: 92, description: 'Team communication platform', experience: '5+ years' }
    ],
    security: [
      { name: 'Sentry', proficiency: 85, description: 'Error tracking and monitoring', experience: '3+ years' },
      { name: 'Auth0', proficiency: 80, description: 'Identity and access management', experience: '2+ years' },
      { name: 'Stripe', proficiency: 82, description: 'Payment processing platform', experience: '3+ years' },
      { name: 'Cloudflare Security', proficiency: 78, description: 'Web security services', experience: '2+ years' },
      { name: 'OWASP', proficiency: 75, description: 'Security best practices', experience: '3+ years' },
      { name: 'SSL/TLS', proficiency: 80, description: 'Encryption protocols', experience: '4+ years' }
    ]
  };

  const activeCategory_data = categories.find(cat => cat.id === activeCategory);
  const activeTechnologies = technologies[activeCategory as keyof typeof technologies];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 lg:ml-80">
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
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We use cutting-edge technologies and proven tools to build scalable, 
            performant, and maintainable products that developers love.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${activeCategory_data?.color} rounded-xl mb-4`}>
              {activeCategory_data?.icon && <activeCategory_data.icon className="h-8 w-8 text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {activeCategory_data?.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {activeCategory_data?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {tech.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {tech.description}
                </p>

                {/* Experience */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Experience: {tech.experience}
                  </span>
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>

                {/* Proficiency Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${activeCategory_data?.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies Mastered', value: '30+' },
            { label: 'Years of Experience', value: '5+' },
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Team Proficiency', value: '90%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;