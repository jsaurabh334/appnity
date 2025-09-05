import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Palette, 
  Rocket, 
  Heart, 
  Coffee,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Send,
  Lightbulb
} from 'lucide-react';

const Careers: React.FC = () => {
  const openRoles = [
    {
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote',
      salary: '$80k - $120k',
      description: 'Join our core team to build and scale our product portfolio. You\'ll work across the entire stack and have significant impact on product direction.',
      requirements: [
        '5+ years of React/TypeScript experience',
        'Strong backend development skills (Node.js, PostgreSQL)',
        'Experience with cloud platforms (AWS, Vercel)',
        'Passion for developer tools and platforms'
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Product Designer',
      type: 'Full-time',
      location: 'Remote',
      salary: '$70k - $100k',
      description: 'Lead design for our growing product suite. You\'ll own the entire design process from research to final implementation.',
      requirements: [
        '3+ years of product design experience',
        'Strong portfolio showing end-to-end design process',
        'Experience designing for developer audiences',
        'Proficiency in Figma and design systems'
      ],
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'DevOps Engineer',
      type: 'Contract',
      location: 'Remote',
      salary: '$60k - $90k',
      description: 'Help us scale our infrastructure and improve our deployment processes. Perfect for someone who loves automation and reliability.',
      requirements: [
        '3+ years of DevOps/Infrastructure experience',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong scripting skills (Bash, Python)',
        'Experience with monitoring and alerting systems'
      ],
      skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Monitoring']
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Remote First',
      description: 'Work from anywhere in the world. We believe great talent isn\'t limited by geography.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'We care about results, not when you work. Find your most productive hours.'
    },
    {
      icon: Rocket,
      title: 'Growth Opportunities',
      description: 'Learn new technologies, take on bigger challenges, and grow your career with us.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness stipends.'
    },
    {
      icon: Coffee,
      title: 'Equipment & Setup',
      description: 'Top-tier equipment, home office setup budget, and co-working space allowances.'
    },
    {
      icon: Users,
      title: 'Team Retreats',
      description: 'Annual team retreats to connect, collaborate, and have fun together.'
    }
  ];

  const collaborationTypes = [
    {
      title: 'Full-time Employee',
      description: 'Join our core team with full benefits and equity participation.',
      ideal: 'Experienced professionals looking for long-term growth'
    },
    {
      title: 'Contract/Freelance',
      description: 'Work on specific projects with flexible timeline and scope.',
      ideal: 'Specialists who prefer project-based work'
    },
    {
      title: 'Indie Hacker Partnership',
      description: 'Co-build products with us and share in the success.',
      ideal: 'Entrepreneurs with complementary skills and ideas'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contribute to our open source projects and get recognition.',
      ideal: 'Developers looking to build their portfolio and give back'
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
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Help us build the next generation of developer-first products. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </motion.div>

        {/* Culture */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              We're a distributed team of makers, builders, and dreamers. We value autonomy, 
              creativity, and the courage to ship fast and iterate based on feedback.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Remote-First</div>
                <div className="text-blue-100">Since day one</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Ship Fast</div>
                <div className="text-blue-100">Weekly deployments</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Learn Together</div>
                <div className="text-blue-100">Growth mindset</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Open Roles */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Open Positions
          </motion.h2>

          <div className="space-y-8">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {role.type}
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          {role.location}
                        </span>
                        <span className="flex items-center text-gray-600 dark:text-gray-400">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {role.salary}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {role.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Why Work With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ways to Collaborate */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Ways to Work With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {type.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Ideal for: {type.ideal}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 text-center"
        >
          <Lightbulb className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            We're always interested in connecting with talented individuals. 
            Send us your ideas, portfolio, or just introduce yourself!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <Send className="mr-2 h-5 w-5" />
              Send Us Your Ideas
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Careers;