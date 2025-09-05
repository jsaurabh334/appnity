import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Github, 
  Twitter, 
  Linkedin, 
  MessageSquare, 
  Heart, 
  Mail, 
  ExternalLink,
  MapPin,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Training', path: '/training' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      url: '#', 
      label: 'GitHub'
    },
    { 
      icon: Twitter, 
      url: '#', 
      label: 'Twitter'
    },
    { 
      icon: Linkedin, 
      url: '#', 
      label: 'LinkedIn'
    },
    { 
      icon: MessageSquare, 
      url: '#', 
      label: 'Discord'
    }
  ];

  const products = [
    { name: 'CodeGram', url: '#', status: 'Live' },
    { name: 'ToolForge', url: '#', status: 'Coming Soon' },
    { name: 'LaunchBoard', url: '#', status: 'In Development' }
  ];

  const resources = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'API Reference', url: '/api-reference' },
    { name: 'Blog', url: '/blog' },
    { name: 'Changelog', url: '/changelog' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Appnity</span>
                <div className="text-sm text-gray-400">Product Studio</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We build and launch developer-first digital products that empower creators worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                hello@appnity.com
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Remote First
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Globe className="h-4 w-4 mr-2" />
                50+ Countries
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-between"
                  >
                    <span>{product.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      product.status === 'Live' 
                        ? 'bg-green-900/30 text-green-400' 
                        : product.status === 'In Development'
                        ? 'bg-blue-900/30 text-blue-400'
                        : 'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {product.status}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span>{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2025 Appnity Software Private Limited. Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for developers worldwide.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;