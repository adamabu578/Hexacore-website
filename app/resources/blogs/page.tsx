"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Linkedin, Instagram, Twitter, Search, Filter } from 'lucide-react';

const HexacoreBlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All content');
  
  const filters = ['All content', 'Topics', 'Categories', 'Latest', 'Languages', 'Year', 'Metrics'];
  
  const blogPosts = [
    {
      id: 1,
      image: '/assets/network-blog.jpg',
      category: 'AI',
      title: 'Scaling for the Future: Hexacore Performance Insights',
      description: 'The 2025 Hexacore Performance Benchmark, incorporating AI workloads for the first time, demonstrates that smarter engineering and...',
      readTime: '5 min read'
    },
    {
      id: 2,
      image: '/assets/onboard-blogs.jpg',
      category: 'Core',
      title: 'Top Tips to Make Your Bank More Efficient',
      description: 'Discover how modernizing core banking systems, secure, multiple user experiences, AI-driven efficiency.',
      readTime: '4 min read'
    },
    {
      id: 3,
      image: '/assets/stream-blog.jpg',
      category: 'UX',
      title: 'Streamlining Digital Onboarding in Financial Institutions',
      description: 'Explore the benefits, challenges, and best practices of digital onboarding in financial services to drive growth and improve cus...',
      readTime: '6 min read'
    },
    {
      id: 4,
      image: '/assets/people-blog1.jpg',
      category: 'Digital',
      title: 'Resiliency in Hybrid Banking for The Nigerian Market',
      description: 'Integrated empowers  fintech banks to innovate, collaborate, and grow in a fast-evolving digital landscape.',
      readTime: '5 min read'
    },
    {
      id: 5,
      image: '/assets/people-blogs.jpg',
      category: 'Fintech',
      title: 'A New Era for Banking: Navigating the GENIUS Act',
      description: 'The article acts as the first major cryptocurrency law, regulating payment stablecoins and creating new opportunities for banks to...',
      readTime: '7 min read'
    },
    {
      id: 6,
      image: '/assets/onboard-blogs.jpg',
      category: 'ESG',
      title: 'A New Era of Tech-led Growth for Building Societies',
      description: 'Explore how UK building societies can drive tech growth, adapt to regulation, and meet evolving member needs in a digital w...',
      readTime: '5 min read'
    },
    {
      id: 7,
      image: '/assets/digital-blog.jpg',
      category: 'Digital',
      title: 'What is Digital Banking?',
      description: 'As Hexacore, we talk a lot about building digital banking solutions to help financial organizations improve their customer...',
      readTime: '4 min read'
    },
    {
      id: 8,
      image: '/assets/onboard-blog1.jpg',
      category: 'Core',
      title: 'What are Injunctions and what they mean for your Compliance Team?',
      description: 'A Supreme Court ruling on immigration may seem unrelated to financial-and it would be how nationwide injunctions work.',
      readTime: '6 min read'
    },
    {
      id: 9,
      image: '/assets/transform-blog.jpg',
      category: 'ESG',
      title: 'Transforming sanctions screening is essential for banks',
      description: 'Sanctions compliance is no longer just a legal obligation.',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="text-sm text-teal-500">
            Home → Blogs
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Hexacore Blogs
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover the latest insights, trends and innovations in banking technology with expert analysis, case studies and industry updates from Temenos.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/assets/blog-hero.jpg" 
              alt="Person reading on tablet" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`rounded-full px-4 py-2 text-sm ${
                    activeFilter === filter 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full px-4 py-2">
                <Filter className="w-4 h-4 mr-2" />
                Reset filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest blog posts from Hexacore</h2>
              <p className="text-gray-600">625 Results</p>
            </div>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      post.category === 'AI' ? 'bg-teal-500' :
                      post.category === 'Core' ? 'bg-blue-500' :
                      post.category === 'UX' ? 'bg-purple-500' :
                      post.category === 'Digital' ? 'bg-green-500' :
                      post.category === 'Fintech' ? 'bg-orange-500' :
                      'bg-pink-500'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button 
                      variant="ghost" 
                      className="text-teal-500 hover:text-teal-600 p-0 h-auto font-medium"
                    >
                      Read blog
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <Button 
              variant="default" 
              className="w-10 h-10 rounded-full bg-blue-900 text-white hover:bg-blue-800"
            >
              1
            </Button>
            <Button 
              variant="outline" 
              className="w-10 h-10 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              2
            </Button>
            <Button 
              variant="outline" 
              className="w-10 h-10 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              3
            </Button>
            <span className="px-2 text-gray-500">...</span>
            <Button 
              variant="outline" 
              className="w-10 h-10 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              12
            </Button>
            <Button 
              variant="outline" 
              className="px-4 py-2 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The future of banking starts here
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover how our platform helps financial institutions navigate change, embrace new opportunities, and deliver smarter, faster banking. Together, we embrace the future of finance – Leading Banking Forward.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contact the team</h3>
                <p className="text-gray-600 text-sm">We're here to help.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Attend an event</h3>
                <p className="text-gray-600 text-sm">Join us live and be part of the conversation.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Explore resources</h3>
                <p className="text-gray-600 text-sm">Expert insights, guides, and news.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Newsletter sign-up</h3>
                <p className="text-gray-600 text-sm">Subscribe for Hexacore news, updates, events.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Social Icons */}
          <div className="flex items-center justify-between mb-12">
            <div className="text-2xl font-bold">Hexacore</div>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Core Banking</a></li>
                <li><a href="#" className="hover:text-white">Digital Banking</a></li>
                <li><a href="#" className="hover:text-white">Wealth Management</a></li>
                <li><a href="#" className="hover:text-white">Platform</a></li>
                <li><a href="#" className="hover:text-white">AI</a></li>
                <li><a href="#" className="hover:text-white">Cloud</a></li>
                <li><a href="#" className="hover:text-white">Temenos SaaS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Retail & Business</a></li>
                <li><a href="#" className="hover:text-white">Corporate & Commercial</a></li>
                <li><a href="#" className="hover:text-white">Wealth Management</a></li>
                <li><a href="#" className="hover:text-white">Banking Experiences</a></li>
                <li><a href="#" className="hover:text-white">Credit Unions & Community</a></li>
                <li><a href="#" className="hover:text-white">Islamic Banking</a></li>
                <li><a href="#" className="hover:text-white">Inclusive & Community</a></li>
                <li><a href="#" className="hover:text-white">Regionalized Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Become a Partner</a></li>
                <li><a href="#" className="hover:text-white">Delivery</a></li>
                <li><a href="#" className="hover:text-white">Sales</a></li>
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Solution Providers</a></li>
                <li><a href="#" className="hover:text-white">Strategic Advisors</a></li>
                <li><a href="#" className="hover:text-white">Developer Community</a></li>
                <li><a href="#" className="hover:text-white">Newsletter Sign-up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Blogs</a></li>
                <li><a href="#" className="hover:text-white">Asset Library</a></li>
                <li><a href="#" className="hover:text-white">Customer Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Press Releases</a></li>
                <li><a href="#" className="hover:text-white">Newsletter Sign-up</a></li>
                <li><a href="#" className="hover:text-white">Videos</a></li>
                <li><a href="#" className="hover:text-white">Webinar Replays</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Webinars</a></li>
                <li><a href="#" className="hover:text-white">Value Benchmark</a></li>
                <li><a href="#" className="hover:text-white">Ambassador Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Vision & Strategy</a></li>
                <li><a href="#" className="hover:text-white">Our Approach to ESG</a></li>
                <li><a href="#" className="hover:text-white">Leadership</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white">Our Culture</a></li>
                <li><a href="#" className="hover:text-white">Hexacore Offices</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Hexacore Fellows</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-300 gap-4">
              <div>© 2025 Hexacore Lagos Nigeria</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className="hover:text-white whitespace-nowrap">Cookie Policy</a>
                <a href="#" className="hover:text-white whitespace-nowrap">Privacy Policy</a>
                <a href="#" className="hover:text-white whitespace-nowrap">Supplier Information</a>
                <a href="#" className="hover:text-white whitespace-nowrap">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HexacoreBlogsPage;