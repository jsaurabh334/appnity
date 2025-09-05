import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Target, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Star,
  Play,
  BookOpen,
  Zap,
  Globe,
  ArrowRight,
  Download,
  Video
} from 'lucide-react';

const Training: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Mastery',
      description: 'Complete full-stack web development course covering modern frameworks, databases, and deployment strategies.',
      icon: Code2,
      gradient: 'from-blue-600 to-indigo-600',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      students: '2.5K+',
      rating: 4.9,
      price: '$299',
      features: [
        'HTML5, CSS3, and JavaScript fundamentals',
        'React and TypeScript development',
        'Node.js and Express backend',
        'Database design with PostgreSQL',
        'API development and integration',
        'Deployment with Vercel and AWS',
        'Real-world project portfolio',
        'Career guidance and mentorship'
      ],
      projects: [
        'E-commerce platform',
        'Social media dashboard',
        'Real-time chat application',
        'Portfolio website'
      ],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications using React Native and modern development practices.',
      icon: Smartphone,
      gradient: 'from-green-600 to-teal-600',
      duration: '10 weeks',
      level: 'Intermediate',
      students: '1.8K+',
      rating: 4.8,
      price: '$249',
      features: [
        'React Native fundamentals',
        'iOS and Android development',
        'State management with Redux',
        'Native device API integration',
        'Push notifications and analytics',
        'App Store deployment process',
        'Performance optimization',
        'Testing and debugging'
      ],
      projects: [
        'Social networking app',
        'E-commerce mobile app',
        'Fitness tracking application',
        'News reader app'
      ],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Cloud Computing & DevOps',
      description: 'Master cloud platforms, containerization, and DevOps practices for scalable application deployment.',
      icon: Cloud,
      gradient: 'from-purple-600 to-pink-600',
      duration: '8 weeks',
      level: 'Intermediate to Advanced',
      students: '1.2K+',
      rating: 4.9,
      price: '$199',
      features: [
        'AWS, Azure, and GCP fundamentals',
        'Docker and Kubernetes',
        'CI/CD pipeline setup',
        'Infrastructure as Code (Terraform)',
        'Monitoring and logging',
        'Security best practices',
        'Cost optimization strategies',
        'Disaster recovery planning'
      ],
      projects: [
        'Microservices architecture',
        'Auto-scaling web application',
        'Multi-cloud deployment',
        'Monitoring dashboard'
      ],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Learn cybersecurity fundamentals, penetration testing, and ethical hacking techniques to secure applications.',
      icon: Shield,
      gradient: 'from-red-600 to-orange-600',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      students: '950+',
      rating: 4.8,
      price: '$349',
      features: [
        'Network security fundamentals',
        'Web application security testing',
        'Penetration testing methodologies',
        'Vulnerability assessment',
        'Security tools and frameworks',
        'Incident response procedures',
        'Compliance and regulations',
        'Ethical hacking certification prep'
      ],
      projects: [
        'Security audit report',
        'Penetration testing lab',
        'Vulnerability scanner',
        'Security monitoring system'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const stats = [
    { icon: Users, label: 'Students Trained', value: '6.5K+', color: 'from-blue-600 to-indigo-600' },
    { icon: Award, label: 'Course Completion', value: '94%', color: 'from-green-600 to-teal-600' },
    { icon: Star, label: 'Average Rating', value: '4.9/5', color: 'from-yellow-600 to-orange-600' },
    { icon: Globe, label: 'Countries Reached', value: '45+', color: 'from-purple-600 to-pink-600' }
  ];

  const benefits = [
    {
      icon: Video,
      title: 'Live Sessions',
      description: 'Interactive live classes with industry experts'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'Detailed course materials and resources'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Active community of learners and mentors'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized certificates upon completion'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with recorded sessions'
    },
    {
      icon: Target,
      title: 'Career Support',
      description: 'Job placement assistance and career guidance'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
    <>
      <Helmet>
        <title>Training & Courses - Appnity Software Private Limited</title>
        <meta name="description" content="Master web development, mobile app development, cloud computing, and cybersecurity with Appnity Software Private Limited's comprehensive training programs." />
        <meta name="keywords" content="web development training, mobile app development course, cloud computing certification, cybersecurity training, ethical hacking course, programming bootcamp" />
        <link rel="canonical" href="https://appnity.com/training" />
        <meta property="og:title" content="Training & Courses - Appnity Software Private Limited" />
        <meta property="og:description" content="Master web development, mobile app development, cloud computing, and cybersecurity with our comprehensive training programs." />
        <meta property="og:url" content="https://appnity.com/training" />
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Training & Courses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Master the skills that matter in today's tech landscape. Our comprehensive training programs 
              are designed by industry experts to help you advance your career.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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

          {/* Courses Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Course Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center`}>
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      {course.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {course.duration}
                      </div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div>
                      <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {course.level}
                      </div>
                      <div className="text-xs text-gray-500">Level</div>
                    </div>
                    <div>
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {course.students}
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      What You'll Learn
                    </h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {course.features.length > 4 && (
                        <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{course.features.length - 4} more topics
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Projects You'll Build
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.projects.map((project, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className={`flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${course.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Enroll Now
                    </motion.button>
                    <motion.button
                      className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              Why Choose Our Training
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Learning Path */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center mb-20"
          >
            <Zap className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Accelerate Your Tech Career
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our structured learning paths are designed to take you from beginner to professional. 
              Join thousands of developers who have transformed their careers with our training.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">6.5K+</div>
                <div className="text-blue-100">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">94%</div>
                <div className="text-blue-100">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$75K</div>
                <div className="text-blue-100">Average Salary Increase</div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 text-center"
          >
            <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Join our community of learners and start building the skills that will 
              define your future in technology. Get started today with our expert-led courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-5 w-5" />
                Browse All Courses
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Training;