import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Key, 
  Database, 
  Shield, 
  Zap, 
  Copy,
  CheckCircle,
  ExternalLink,
  Terminal,
  Globe,
  Lock,
  Activity
} from 'lucide-react';

const ApiReference: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('authentication');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiSections = [
    {
      id: 'authentication',
      title: 'Authentication',
      icon: Key,
      color: 'from-blue-600 to-indigo-600',
      description: 'Secure API authentication and authorization'
    },
    {
      id: 'snippets',
      title: 'Code Snippets',
      icon: Code2,
      color: 'from-green-600 to-teal-600',
      description: 'Manage and share code snippets'
    },
    {
      id: 'users',
      title: 'User Management',
      icon: Database,
      color: 'from-purple-600 to-pink-600',
      description: 'User profiles and account management'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: Activity,
      color: 'from-orange-600 to-red-600',
      description: 'Usage analytics and metrics'
    }
  ];

  const endpoints = {
    authentication: [
      {
        method: 'POST',
        path: '/auth/login',
        description: 'Authenticate user and get access token',
        code: `curl -X POST https://api.appnity.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your-password"
  }'`
      },
      {
        method: 'POST',
        path: '/auth/refresh',
        description: 'Refresh access token',
        code: `curl -X POST https://api.appnity.com/auth/refresh \\
  -H "Authorization: Bearer your-refresh-token"`
      }
    ],
    snippets: [
      {
        method: 'GET',
        path: '/snippets',
        description: 'Get all code snippets',
        code: `curl -X GET https://api.appnity.com/snippets \\
  -H "Authorization: Bearer your-access-token"`
      },
      {
        method: 'POST',
        path: '/snippets',
        description: 'Create a new code snippet',
        code: `curl -X POST https://api.appnity.com/snippets \\
  -H "Authorization: Bearer your-access-token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "React Hook Example",
    "language": "typescript",
    "code": "const [count, setCount] = useState(0);",
    "tags": ["react", "hooks"]
  }'`
      }
    ],
    users: [
      {
        method: 'GET',
        path: '/users/profile',
        description: 'Get current user profile',
        code: `curl -X GET https://api.appnity.com/users/profile \\
  -H "Authorization: Bearer your-access-token"`
      },
      {
        method: 'PUT',
        path: '/users/profile',
        description: 'Update user profile',
        code: `curl -X PUT https://api.appnity.com/users/profile \\
  -H "Authorization: Bearer your-access-token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "bio": "Full-stack developer"
  }'`
      }
    ],
    analytics: [
      {
        method: 'GET',
        path: '/analytics/overview',
        description: 'Get analytics overview',
        code: `curl -X GET https://api.appnity.com/analytics/overview \\
  -H "Authorization: Bearer your-access-token"`
      }
    ]
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'POST':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'DELETE':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>API Reference - Appnity Software Private Limited</title>
        <meta name="description" content="Complete API reference for Appnity Software Private Limited's developer tools. Authentication, endpoints, code examples, and integration guides." />
        <meta name="keywords" content="API reference, REST API, authentication, endpoints, code examples, developer API, CodeGram API" />
        <link rel="canonical" href="https://appnity.com/api-reference" />
        <meta property="og:title" content="API Reference - Appnity Software Private Limited" />
        <meta property="og:description" content="Complete API reference for Appnity Software Private Limited's developer tools and platforms." />
        <meta property="og:url" content="https://appnity.com/api-reference" />
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl mb-6">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              API Reference
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Complete reference for Appnity Software Private Limited's APIs. 
              Build powerful integrations with our developer-first platforms.
            </p>
          </motion.div>

          {/* API Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Globe, title: 'Base URL', value: 'https://api.appnity.com', color: 'from-blue-600 to-indigo-600' },
              { icon: Lock, title: 'Authentication', value: 'Bearer Token', color: 'from-green-600 to-teal-600' },
              { icon: Zap, title: 'Rate Limit', value: '1000 req/hour', color: 'from-purple-600 to-pink-600' }
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                <code className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                  {info.value}
                </code>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-32">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">API Sections</h3>
                <nav className="space-y-2">
                  {apiSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveEndpoint(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeEndpoint === section.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <section.icon className="h-5 w-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeEndpoint}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <div className="flex items-center mb-4">
                    {apiSections.find(s => s.id === activeEndpoint)?.icon && (
                      <div className={`w-12 h-12 bg-gradient-to-r ${apiSections.find(s => s.id === activeEndpoint)?.color} rounded-xl flex items-center justify-center mr-4`}>
                        {React.createElement(apiSections.find(s => s.id === activeEndpoint)!.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {apiSections.find(s => s.id === activeEndpoint)?.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {apiSections.find(s => s.id === activeEndpoint)?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Endpoints */}
                <div className="space-y-6">
                  {endpoints[activeEndpoint as keyof typeof endpoints]?.map((endpoint, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      {/* Endpoint Header */}
                      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-lg text-sm font-bold ${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </span>
                            <code className="text-lg font-mono text-gray-900 dark:text-white">
                              {endpoint.path}
                            </code>
                          </div>
                          <motion.button
                            onClick={() => copyToClipboard(endpoint.code, `${activeEndpoint}-${index}`)}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {copiedCode === `${activeEndpoint}-${index}` ? (
                              <>
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                <span>Copy</span>
                              </>
                            )}
                          </motion.button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {endpoint.description}
                        </p>
                      </div>

                      {/* Code Example */}
                      <div className="bg-gray-900 p-6">
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{endpoint.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* SDK Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center"
          >
            <Terminal className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Official SDKs Coming Soon
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're working on official SDKs for JavaScript, Python, and Go to make 
              integration even easier. Join our newsletter to be notified when they're ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Join Newsletter
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="mr-2 h-5 w-5" />
                View Examples
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ApiReference;