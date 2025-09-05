import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Palette, 
  Rocket, 
  Heart, 
  Coffee,
  Send,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Collaborate: React.FC = () => {
  const collaborationTypes = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Join our core team to build and scale our product portfolio.',
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      type: 'Full-time'
    },
    {
      icon: Palette,
      title: 'Product Designer',
      description: 'Lead design for our growing suite of developer tools.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      type: 'Full-time'
    },
    {
      icon: Rocket,
      title: 'Indie Hacker',
      description: 'Partner with us to co-build and launch new products.',
      skills: ['Product Vision', 'MVP Development', 'Growth Hacking'],
      type: 'Partnership'
    },
    {
      icon: Heart,
      title: 'Open Source Contributor',
      description: 'Contribute to our open source projects and build your portfolio.',
      skills: ['Git', 'Documentation', 'Community Building'],
      type: 'Volunteer'
    }
  ];

  const benefits = [
    'Remote-first work environment',
    'Competitive salary and equity',
    'Latest tech equipment',
    'Learning and conference budget',
    'Flexible working hours',
    'Health and wellness benefits'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section id="collaborate" className="py-20 bg-white dark:bg-gray-900">
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
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're looking for passionate individuals who want to build the future of developer tools. 
            Whether you're a seasoned professional or just starting out, there's a place for you here.
          </p>
        </motion.div>

        {/* Collaboration Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {collaborationTypes.map((collab, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <collab.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {collab.title}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {collab.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {collab.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collab.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Work With Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We believe in creating an environment where talented people can do their best work. 
              Here's what we offer to make that happen.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <Coffee className="h-12 w-12 mb-6" />
              <h4 className="text-xl font-bold mb-4">Remote-First Culture</h4>
              <p className="text-blue-100 mb-6">
                Work from anywhere in the world. We believe great talent isn't limited by geography, 
                and we've built our processes to support distributed teams from day one.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-100 text-sm">Remote</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-100 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 text-center"
        >
          <Lightbulb className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Have an Idea? Let's Build Together
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            We're always interested in connecting with talented individuals who have great ideas. 
            Whether you want to join our team or partner with us on a new venture, let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              <Send className="mr-2 h-5 w-5" />
              Pitch Your Idea
            </motion.button>
            <motion.button
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborate;