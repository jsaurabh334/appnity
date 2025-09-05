import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Mail, AlertTriangle, Scale } from 'lucide-react';

const Terms: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - Appnity Software Private Limited</title>
        <meta name="description" content="Appnity Software Private Limited's Terms of Service - Read our terms and conditions for using our website and services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://appnity.com/terms" />
      </Helmet>

      <div className="min-h-screen py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Last updated: January 1, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing and using Appnity Software Private Limited's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Appnity Software Private Limited is a product studio that builds and launches developer-first digital products. We provide information about our services, products, and company through this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use License</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials on Appnity Software Private Limited's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User Conduct</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  You agree not to use the service to:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Appnity Software Private Limited and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Privacy Policy</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Disclaimer</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      The materials on Appnity Software Private Limited's website are provided on an 'as is' basis. Appnity Software Private Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitations</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  In no event shall Appnity Software Private Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Appnity Software Private Limited's website, even if Appnity Software Private Limited or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Accuracy of Materials</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The materials appearing on Appnity Software Private Limited's website could include technical, typographical, or photographic errors. Appnity Software Private Limited does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Modifications</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Appnity Software Private Limited may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Appnity Software Private Limited operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                    <span>hello@appnity.com</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Scale className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                    <span>Legal Department</span>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;