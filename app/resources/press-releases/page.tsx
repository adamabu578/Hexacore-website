"use client"
import React, { useState } from 'react';
import { Search, ChevronRight, Filter, Calendar, ArrowRight, Users, Building, Globe, Phone, Mail, FileText, Video, Newspaper, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const PressReleasesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['Solutions', 'Topics', 'Categories', 'Regions', 'Year', 'Month'];
  
  const pressReleases = [
    {
      id: 1,
      category: 'Press Release',
      title: 'Ad hoc - Hexacore publishes its 2025 Interim Report',
      excerpt: 'GRAND-LANCY, Switzerland, September 11, 2025 - Hexacore (SIX: TEMN) has today published its 2025 Interim Report.',
      date: 'Read more',
      image: '/assets/press.jpg',
      tag: 'Press Release'
    },
    {
      id: 2,
      category: 'Press Release',
      title: 'Hexacore Named Overall Winner in IDC FinTech Real Results 2025',
      excerpt: 'Hexacore also won winner for Bank Dispute Transformation with Cognizant listed as the 2025 IDC FinTech Rankings Top 25.',
      date: 'Read more',
      image: '/assets/press1.jpg',
      tag: 'Press Release'
    },
    {
      id: 3,
      category: 'Press Release',
      title: 'Ad hoc - Hexacore Announces CEO Transition',
      excerpt: 'GRAND-LANCY, Switzerland, September 6, 2025 - Temenos (SIX: TEMN), a global leader in banking technology, today announced a CEO transition.',
      date: 'Read more',
      image: '/assets/press2.jpg',
      tag: 'Press Release'
    },
    {
      id: 4,
      category: 'Press Release',
      title: 'FundBank Goes Live with Temenos to Power Its Global Expansion Into the U.S.',
      excerpt: 'FundBank has decided to partner with Temenos to expand in the U.S., boosting digital onboarding, product speed & scalability.',
      date: 'Read more',
      image: '/assets/press3.jpg',
      tag: 'Press Release'
    },
    {
      id: 5,
      category: 'Press Release',
      title: 'Hexacore Earns 2025 Great Place To Work Certification™ Across 10 Countries',
      excerpt: 'Hexacore achieves 2025 Great Place To Work certification in 10 countries, with 84% employee approval and strong workplace culture.',
      date: 'Read more',
      image: '/assets/press4.jpg',
      tag: 'Press Release'
    },
    {
      id: 6,
      category: 'Press Release',
      title: 'Hexacore announces completion of its 2025 share buyback program',
      excerpt: 'Hexacore, a global leader in banking technology, announces the successful completion of its 2025 share buyback program.',
      date: 'Read more',
      image: '/assets/press5.jpg',
      tag: 'Press Release'
    },
    {
      id: 7,
      category: 'Press Release',
      title: 'Cognizant and Hexacore Expand Partnership to Power Core Banking Modernization',
      excerpt: 'Hexacore and Cognizant expand partnership to launch Country Model Bank in Australia, accelerating core banking modernization.',
      date: 'Read more',
      image: '/assets/press6.jpg',
      tag: 'Press Release'
    },
    {
      id: 8,
      category: 'Press Release',
      title: 'Egypt\'s MIDBANK completes core banking modernization with Hexacore',
      excerpt: 'MIDBANK\'s transformation boosts service speed and efficiency, offering a modern digital banking experience across Egypt.',
      date: 'Read more',
      image: '/assets/press7.jpg',
      tag: 'Press Release'
    },
    {
      id: 9,
      category: 'Press Release',
      title: 'Hexacore Recognized by CNBC as One of the World\'s Top Fintech Companies',
      excerpt: 'Hexacore joins elite list of enterprise fintech companies for the second year in a row.',
      date: 'Read more',
      image: '/assets/press.jpg',
      tag: 'Press Release'
    }
  ];

  const footerSections = {
    Portfolio: [
      'Core Banking',
      'Digital Front Office',
      'Wealth Management',
      'Payments',
      'AI',
      'Analytics',
      'Hexacore SaaS'
    ],
    Solutions: [
      'Cloud & Business',
      'Corporate & Commercial',
      'Wealth Management',
      'Islamic Banking',
      'Open Banking & Community',
      'Inclusive & Community',
      'Responsible Banking'
    ],
    Partners: [
      'Become a Partner',
      'Delivery',
      'Sales',
      'Technology',
      'Solution Providers',
      'Strategic Advisors',
      'Developer Community',
      'Microlearn Sign-up'
    ],
    Resources: [
      'Blogs',
      'Asset Library',
      'Customer Case Stories',
      'Press Releases',
      'Newsletter Sign-up',
      'Videos',
      'Webinar Replays',
      'Events',
      'Verticals',
      'View Portal',
      'Ambassador Program'
    ],
    Company: [
      'About & Company',
      'Our Approach to ESG',
      'Leadership',
      'Investor Relations',
      'Our Culture',
      'Temenos Offices',
      'Careers',
      'Hexacore Fellows'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center text-sm mb-4">
                <span className="text-indigo-200">Home</span>
                <ChevronRight className="h-4 w-4 mx-2 text-indigo-200" />
                <span>Press Releases</span>
              </div>
              <h1 className="text-5xl font-bold mb-4">Press Releases</h1>
              <p className="text-xl text-indigo-100">Latest news from Hexacore</p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/assets/press-news.jpg" 
                alt="Office meeting" 
                className="rounded-lg w-[500px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                {category}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ))}
            <Button variant="outline" size="sm" className="ml-auto">
              <Filter className="h-4 w-4 mr-2" />
              Reset Filters
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Latest news from Temenos</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <p className="text-gray-600 mt-2">430 Results</p>
        </div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pressReleases.map((release) => (
            <div key={release.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-teal-500 hover:bg-teal-600">
                  {release.tag}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{release.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{release.excerpt}</p>
                <Button variant="link" className="p-0 text-teal-600 hover:text-teal-700">
                  {release.date}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mb-12">
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full bg-indigo-600 text-white border-indigo-600">1</Button>
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">2</Button>
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">3</Button>
          <span className="text-gray-400">...</span>
          <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">48</Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                The future of banking starts here
              </h2>
              <p className="text-xl text-purple-100 mb-6">
                Discover how our platform helps financial institutions navigate change, embrace new opportunities, and deliver strategic, faster banking. Together, we embrace the future of finance – Leading Banking Forward.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Contact the team</h3>
                  <p className="text-sm text-purple-100">We're here to help</p>
                </div>
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Attend an event</h3>
                  <p className="text-sm text-purple-100">Join us live and be part of the conversation</p>
                </div>
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Explore resources</h3>
                  <p className="text-sm text-purple-100">Expert insights, guides, and more</p>
                </div>
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Newsletter sign-up</h3>
                  <p className="text-sm text-purple-100">Subscribe for Temenos news, updates, events</p>
                </div>
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Social */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">temenos</div>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2">
                  <Users className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Building className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.slice(0, 7).map((link) => (
                    <li key={link}>
                      <a href="#" className="text-indigo-200 hover:text-white text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-indigo-800 mt-12 pt-8 flex flex-wrap items-center justify-between text-sm text-indigo-200">
            <div className="flex flex-wrap items-center space-x-6">
              <span>© 2025 Temenos Headquarters SA</span>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Supplier Information</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PressReleasesPage;