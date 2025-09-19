"use client"
import React, { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const CustomerSuccessStories = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const successStories = [
    {
      id: 1,
      company: 'Fair Money',
      logo: 'Fair Money',
      title: 'Fair Money - Success Story',
      description: 'Fair Money, a leading provider of integrated banking solutions in Egypt, is aiming to become one of the country’s top financial institutions.',
      color: 'bg-blue-50'
    },
    {
      id: 2,
      company: 'Aboki africa',
      logo: 'Aboki Africa',
      title: 'Aboki africa - Success Story',
      description: 'boki Africa (now Grey), founded in 2020, simplifies cross-border banking for Nigerians with digital foreign accounts, FX conversions, and international payments.',
      color: 'bg-yellow-50',
      logoColor: 'bg-yellow-400'
    },
    {
      id: 3,
      company: 'Cleva',
      logo: 'Cleva',
      title: 'Cleva - Success Story',
      description: 'Cleva, founded in 1979 in Nigeria, has evolved from a project finance and investment bank into a modern digital banking institution.',
      color: 'bg-green-50',
      logoColor: 'bg-green-600'
    },
    {
      id: 4,
      company: 'Cabon',
      logo: 'The Carbon',
      title: 'The Carbon - Success Story',
      description: 'Carbon, founded in 2012 in Nigeria, has grown from a lending app into a leading digital bank offering payments, credit, savings, and investments across Africa.',
      color: 'bg-purple-50',
      logoColor: 'bg-purple-400'
    },
    {
      id: 5,
      company: 'Eyowo',
      logo: 'Eyowo BANK',
      title: 'Eyowo - Success Story',
      description: 'Eyowo Nigeria delivers digital payments, savings, and credit solutions, driving smarter money management and financial inclusion.',
      color: 'bg-blue-50',
      logoColor: 'bg-blue-600'
    },
    {
      id: 6,
      company: 'Alt Bank',
      logo: 'Alt bank',
      title: 'Alt bank - Success Story',
      description: 'AltBank Nigeria is a fast-growing digital-first bank providing retail, SME, and corporate clients with innovative financial solutions, secure digital channels, and personalized services that drive inclusion and growth.',
      color: 'bg-yellow-50',
      logoColor: 'bg-yellow-600'
    },
    // {
    //   id: 7,
    //   company: 'STC Bank',
    //   logo: 'STC Bank',
    //   title: 'STC Bank - Success Story',
    //   description: 'STC Bank is a pioneering digital bank in Saudi Arabia. It was born from the transformation of STC Pay...',
    //   color: 'bg-green-50',
    //   logoColor: 'bg-green-500'
    // },
    // {
    //   id: 8,
    //   company: 'Integris',
    //   logo: 'INTEGRIS',
    //   title: 'Integris - Success Story',
    //   description: 'Integris Credit Union, with $1.0B under administration, serves northern BC and consistently ranks larger institutions...',
    //   color: 'bg-teal-50',
    //   logoColor: 'bg-teal-600'
    // },
    // {
    //   id: 9,
    //   company: 'IIG Bank',
    //   logo: 'IIG Bank (Malta) Ltd',
    //   title: 'IIG Bank - Success Story',
    //   description: 'IIG Bank (Malta) Ltd. Founded in 2010, is a licensed credit institution regulated by the Malta Financial Services Authority...',
    //   color: 'bg-red-50',
    //   logoColor: 'bg-red-600'
    // }
  ];

  const footerSections = {
    portfolio: ['Open Banking', 'Digital Banking', 'Digital Engagement', 'Platform', 'Core Banking', 'Cloud', 'Temenos SaaS'],
    solutions: ['Financial Inclusion', 'Corporate & Commercial', 'Wealth Management', 'Banking Experience',  'Credit Lending & Community', 'Islamic Banking', 'Inclusive & Community', 'Responsible Solutions'],
    partners: ['Become a Partner', 'Delivery', 'Services', 'Technology', 'Solution Providers', 'Strategic Advisory', 'Developer Community', 'Responsible Sign-in'],
    resources: ['Blogs', 'About Library', 'Customer Success Stories', 'Press Releases', 'Investor Sign-up', 'Videos', 'Webinar Replays', 'Events', 'Walk Benchmark', 'Ambassador Program'],
    company: ['Leadership', 'Investor Relations', 'Our Careers', 'Hexacore Culture', 'Careers']
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-[#28B1D3]">Hexacore</div>
            <div className="hidden md:flex space-x-6 text-gray-600">
              <span className="text-sm">Customer Success Stories</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#153365] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">Customer<br />Success Stories</h1>
            <p className="text-xl text-blue-100">Real stories of transformation with Hexacore solutions.</p>
          </div>
          <div className="hidden lg:block flex-1">
            <div className="relative">
              <img 
                src="/assets/office-lady.jpg" 
                alt="Professional woman working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-6 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium">Solutions</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">Regions</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">Sectors</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Reset Filters</span>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
            <span className="text-gray-600">181 Results</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className={`${story.color} rounded-lg p-6 hover:shadow-lg transition-shadow duration-300`}>
                <div className="mb-6">
                  <div className={`${story.logoColor || 'bg-gray-800'} text-white px-4 py-2 rounded-md text-sm font-bold inline-block`}>
                    {story.logo}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{story.description}</p>
                <button className="flex items-center text-[#153365] font-medium text-sm hover:text-blue-800 transition-colors">
                  <span className="mr-2">Read more</span>
                  <div className="w-6 h-6 bg-[#153365] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">18</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The future of banking starts here
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Discover how our platform helps financial institutions navigate change, embrace new opportunities, and deliver smarter, faster experiences for customers and employees. Whether it's embracing the future of finance — Banking Forward.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-semibold text-gray-900">Contact the team</h3>
                  <p className="text-sm text-gray-600">We're here to help.</p>
                </div>
                <div className="w-8 h-8 bg-[#28B1D3] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-semibold text-gray-900">Attend an event</h3>
                  <p className="text-sm text-gray-600">Join us live and be part of the conversation.</p>
                </div>
                <div className="w-8 h-8 bg-[#28B1D3] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-semibold text-gray-900">Explore resources</h3>
                  <p className="text-sm text-gray-600">Expert insights, guides, and news.</p>
                </div>
                <div className="w-8 h-8 bg-[#28B1D3] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-semibold text-gray-900">Newsletter sign-up</h3>
                  <p className="text-sm text-gray-600">Subscribe for Hexacore news, updates, events.</p>
                </div>
                <div className="w-8 h-8 bg-[#28B1D3] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6">Hexacore</div>
              <div className="flex space-x-4 mb-6">
                <Facebook className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                {footerSections.portfolio.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                {footerSections.solutions.slice(0, 7).map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                {footerSections.partners.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                {footerSections.resources.slice(0, 7).map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                {footerSections.company.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>&copy; 2025 Hexacore Lagos Nigeria</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Cookie Policy</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Supplier Information</span>
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerSuccessStories;