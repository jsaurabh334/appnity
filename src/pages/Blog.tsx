import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Code2,
  Lightbulb,
  Users,
  Rocket
} from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'product', name: 'Product', count: 4 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'culture', name: 'Culture', count: 2 },
    { id: 'tutorials', name: 'Tutorials', count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building CodeGram: From Idea to 2.5K Users',
      excerpt: 'The complete story behind our flagship product, the challenges we faced, and the lessons we learned while scaling from zero to thousands of active developers.',
      author: 'Alex Chen',
      authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'product',
      tags: ['Product Development', 'Startup Journey', 'User Growth'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Developer Tools: AI-Powered Workflows',
      excerpt: 'How artificial intelligence is reshaping the way developers work and what it means for the next generation of development tools and platforms.',
      author: 'Sarah Kim',
      authorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'technology',
      tags: ['AI', 'Developer Tools', 'Future Tech'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Remote-First Product Development: Our Playbook',
      excerpt: 'How we built a distributed team and the tools, processes, and culture that make remote product development not just possible, but superior.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'culture',
      tags: ['Remote Work', 'Team Building', 'Productivity'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large Applications',
      excerpt: 'Essential TypeScript patterns and practices we use at Appnity Software Private Limited to maintain code quality and developer productivity at scale.',
      author: 'Alex Chen',
      authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-12-28',
      readTime: '12 min read',
      category: 'tutorials',
      tags: ['TypeScript', 'Best Practices', 'Code Quality'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Building a Developer Community: Lessons from CodeGram',
      excerpt: 'What we learned about fostering engagement, creating value, and building a thriving community of developers around our products.',
      author: 'Sarah Kim',
      authorAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-12-20',
      readTime: '7 min read',
      category: 'product',
      tags: ['Community Building', 'User Engagement', 'Product Strategy'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'The Tech Stack Behind Our Products',
      excerpt: 'A deep dive into the technologies, frameworks, and tools we use to build fast, scalable, and maintainable developer-first products.',
      author: 'Marcus Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-12-15',
      readTime: '9 min read',
      category: 'technology',
      tags: ['Tech Stack', 'Architecture', 'Performance'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'product': return Code2;
      case 'technology': return Rocket;
      case 'culture': return Users;
      case 'tutorials': return Lightbulb;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'product': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'technology': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'culture': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'tutorials': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog - Appnity Software Private Limited</title>
        <meta name="description" content="Insights, stories, and technical deep dives from the Appnity Software Private Limited team. Learn about product development, technology trends, and developer culture." />
        <meta name="keywords" content="tech blog, product development, developer insights, startup stories, technology trends, coding tutorials" />
        <link rel="canonical" href="https://appnity.com/blog" />
        <meta property="og:title" content="Blog - Appnity Software Private Limited" />
        <meta property="og:description" content="Insights, stories, and technical deep dives from the Appnity Software Private Limited team." />
        <meta property="og:url" content="https://appnity.com/blog" />
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Insights, stories, and lessons learned from building developer-first products. 
              Get behind-the-scenes content and technical deep dives.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'all' && !searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12 text-white">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-6 w-6 mr-2" />
                      <span className="text-blue-200 font-medium">Featured Article</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-blue-100 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center">
                        <img
                          src={featuredPost.authorAvatar}
                          alt={featuredPost.author}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-blue-200">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center text-blue-200">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-blue-200">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-3xl p-12 text-center"
          >
            <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to get the latest articles, product updates, 
              and behind-the-scenes content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;