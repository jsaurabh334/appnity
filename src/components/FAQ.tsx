import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare, Mail, ExternalLink } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is LaunchIt?",
          answer: "Appnity Software Private Limited is a modern product studio that builds and launches developer-first digital products. We specialize in creating tools and platforms that empower developers, designers, and indie builders to create amazing things."
        },
        {
          question: "How is Appnity Software Private Limited different from other development agencies?",
          answer: "Unlike traditional agencies, we're a product studio that builds our own products while also partnering with others. We focus exclusively on developer tools and platforms, bringing deep technical expertise and understanding of developer workflows to every project."
        },
        {
          question: "What's your development process?",
          answer: "We follow a streamlined process: Idea validation → MVP development → User feedback → Iteration → Scale. We typically go from concept to MVP in 2-4 weeks and to full launch in 6-12 weeks, depending on complexity."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          question: "What is CodeGram?",
          answer: "CodeGram is our flagship social media platform for developers. It allows developers to share code snippets, discover solutions, and connect with the global developer community. It features syntax highlighting, community voting, and real-time collaboration."
        },
        {
          question: "Are your products open source?",
          answer: "We believe in open source and contribute to the community. Some of our tools and libraries are open source, while our main products use a freemium model to sustain development and growth."
        },
        {
          question: "What products are coming next?",
          answer: "We're working on ToolForge (AI-powered CLI tool builder) and LaunchBoard (project dashboard for indie developers). We regularly share updates about upcoming products in our newsletter and blog."
        }
      ]
    },
    {
      category: "Collaboration",
      questions: [
        {
          question: "How can I work with Appnity Software Private Limited?",
          answer: "We offer several collaboration models: full-time positions, contract work, indie hacker partnerships, and open source contributions. Whether you're a developer, designer, or have a great product idea, we'd love to hear from you."
        },
        {
          question: "Do you take on client projects?",
          answer: "We selectively take on projects that align with our mission of building developer-first products. We prefer partnerships where we can have significant input on product direction and technical decisions."
        },
        {
          question: "What's the application process like?",
          answer: "Our process is straightforward: initial conversation → portfolio/skills review → technical discussion → cultural fit assessment. We value passion for developer tools, technical excellence, and collaborative spirit over traditional credentials."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you use?",
          answer: "Our primary stack includes React, TypeScript, Node.js, PostgreSQL, Prisma, Supabase, and Vercel. We choose technologies based on project needs but prefer modern, well-supported tools that enable rapid development."
        },
        {
          question: "How do you ensure product quality?",
          answer: "We follow best practices including comprehensive testing, code reviews, continuous integration, and user feedback loops. We also prioritize performance, security, and accessibility from day one."
        },
        {
          question: "Do you provide technical support?",
          answer: "Yes, we provide support for all our products through multiple channels including email, Discord community, and documentation. Our response time is typically within 24 hours for most inquiries."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Join our Discord",
      description: "Get real-time help from our community",
      action: "Join Discord",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: ExternalLink,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs",
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about Appnity Software Private Limited, our products, and how we work. 
            Can't find what you're looking for? Reach out to us directly.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={globalIndex}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                    >
                      <motion.button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="font-semibold text-gray-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <Plus className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          )}
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're here to help. Choose the best way to get in touch with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center group-hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg mb-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {option.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {option.description}
                  </p>
                  <motion.button
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${option.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.action}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;