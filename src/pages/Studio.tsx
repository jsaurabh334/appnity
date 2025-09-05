import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Repeat, 
  TrendingUp,
  Clock,
  Users,
  Zap,
  Target,
  Heart,
  CheckCircle
} from 'lucide-react';

const Studio: React.FC = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      description: 'We start with a spark of an idea, conducting market research and validating concepts through user interviews and competitive analysis.',
      duration: '1-2 weeks'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our design process focuses on user experience, creating wireframes, prototypes, and high-fidelity designs that prioritize usability.',
      duration: '2-3 weeks'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build using modern tech stacks, following best practices for scalability, security, and performance from day one.',
      duration: '4-8 weeks'
    },
    {
      icon: TestTube,
      title: 'Testing',
      description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality delivery.',
      duration: '1-2 weeks'
    },
    {
      icon: Repeat,
      title: 'Iteration',
      description: 'Based on user feedback and analytics, we continuously improve and add features to enhance the product experience.',
      duration: 'Ongoing'
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'We optimize for growth, implementing advanced features, integrations, and infrastructure to handle increased demand.',
      duration: 'Ongoing'
    }
  ];

  const techStack = [
    { category: 'Frontend', tools: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Framer Motion'] },
    { category: 'Backend', tools: ['Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'GraphQL'] },
    { category: 'Infrastructure', tools: ['Vercel', 'AWS', 'Docker', 'Supabase', 'PlanetScale'] },
    { category: 'Tools', tools: ['Figma', 'GitHub', 'Linear', 'Postman', 'Sentry'] }
  ];

  const principles = [
    {
      icon: Users,
      title: 'Developer-First',
      description: 'Every product we build starts with understanding developer needs and workflows.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'We move fast without compromising quality, delivering value quickly to users.'
    },
    {
      icon: Target,
      title: 'Focused Execution',
      description: 'We prioritize features that matter most, avoiding feature bloat and complexity.'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'We build with and for the community, incorporating feedback at every stage.'
    }
  ];

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
            Our Studio Process
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We've refined our development process to deliver exceptional products quickly. 
            Here's how we turn ideas into successful digital platforms.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            From Idea to Product
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 hidden md:block"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className="md:ml-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                        <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Our Tech Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Our Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <principle.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Speed Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Development Speed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We pride ourselves on rapid development without compromising quality. 
            Here's how fast we typically move from concept to launch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2-4</div>
              <div className="text-blue-100">Weeks to MVP</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6-12</div>
              <div className="text-blue-100">Weeks to Launch</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24-48</div>
              <div className="text-blue-100">Hours for Iterations</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Studio;