import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Newsletter from '../components/Newsletter';
import Collaborate from '../components/Collaborate';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Appnity Software Private Limited - We Build & Launch Developer-First Digital Products</title>
        <meta name="description" content="Appnity Software Private Limited is a modern product studio that builds and launches developer-focused digital platforms. From CodeGram to next-gen tools, we empower developers worldwide with cutting-edge solutions." />
        <meta name="keywords" content="product studio, developer tools, software development, startup, tech company, digital products, CodeGram, web development, React, TypeScript, indie developers" />
        <link rel="canonical" href="https://appnity.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Appnity Software Private Limited - We Build & Launch Developer-First Digital Products" />
        <meta property="og:description" content="A modern product studio shaping the future of web tools. We turn ideas into scalable platforms that developers love." />
        <meta property="og:url" content="https://appnity.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://appnity.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Appnity Software Private Limited" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AppnitySoftware" />
        <meta name="twitter:creator" content="@AppnitySoftware" />
        <meta name="twitter:title" content="Appnity Software Private Limited - We Build & Launch Developer-First Digital Products" />
        <meta name="twitter:description" content="A modern product studio shaping the future of web tools. We turn ideas into scalable platforms that developers love." />
        <meta name="twitter:image" content="https://appnity.com/og-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Appnity Software Private Limited" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Appnity Software Private Limited",
            "alternateName": "Appnity Software",
            "url": "https://appnity.com",
            "logo": "https://appnity.com/logo.png",
            "description": "A modern product studio that builds and launches developer-first digital products",
            "foundingDate": "2025",
            "founders": [
              {
                "@type": "Person",
                "name": "Alex Chen"
              }
            ],
            "numberOfEmployees": "3-10",
            "industry": "Software Development",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Remote",
              "addressCountry": "Global"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-0123",
              "contactType": "customer service",
              "email": "hello@appnity.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://github.com/appnity-software",
              "https://twitter.com/AppnitySoftware",
              "https://linkedin.com/company/appnity-software"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Developer Tools and Platforms",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "SoftwareApplication",
                    "name": "CodeGram",
                    "description": "Social media platform for developers",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Web"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Appnity Software Private Limited",
            "url": "https://appnity.com",
            "description": "We build and launch developer-first digital products",
            "publisher": {
              "@type": "Organization",
              "name": "Appnity Software Private Limited"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://appnity.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <Collaborate />
      <Contact />
    </>
  );
};

export default Home;