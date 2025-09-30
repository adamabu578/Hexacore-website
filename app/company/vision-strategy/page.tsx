"use client"
import React, { useState } from 'react';
import { ChevronRight, Play, Users, Building, Globe, Mail, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const OurMissionPage = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const stats = [
    { value: '20%', label: 'invested in R&D', color: 'text-teal-500' },
    { value: '150+', label: 'countries on our model bank framework', color: 'text-blue-500' },
    { value: '3rd', label: 'largest european software company', color: 'text-teal-500' },
    { value: '950', label: 'Hexacore-skilled partner consultants', color: 'text-teal-500' },
    { value: '7k+', label: 'Hexacore-skilled partner consultants', color: 'text-blue-500' },
    { value: '100+', label: 'Fintechs on Hexacore Exchange', color: 'text-teal-500' }
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
      'Newsletter Sign-up'
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
      'Hexacore Offices',
      'Careers',
      'Hexacore Fellows'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-indigo-900">Hexacore</div>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-gray-600 hover:text-[#28B1D3]">
                  Portfolio <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-[#28B1D3]">
                  Solutions <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-[#28B1D3]">
                  Partners <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-[#28B1D3]">
                  Resources <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-[#28B1D3]">
                  Company <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-[#153365] hover:bg-[#28B1D3]">Contact Sales</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#153365]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center text-sm mb-6">
                <span className="text-[#153365]">Company</span>
                <ChevronRight className="h-4 w-4 mx-2 text-[#153365]" />
                <span className="text-[#153365]">Vision & Strategy</span>
              </div>
              <h1 className="text-6xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray mb-8 leading-relaxed">
               Our mission is to empower financial institutions to innovate on the world’s leading banking software platform, harnessing cloud technology to deliver next-generation services and enhanced customer experiences.
              </p>
              <Button className="bg-[#153365] text-gray hover:bg-indigo-700 px-8 py-3">
                Discover more
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-[#153365] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#153365] rounded-full opacity-80 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leading Banking Forward Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-900 rounded-lg overflow-hidden relative">
                <img 
                  src="/assets/mission.jpg" 
                  alt="Banking video" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white
                     rounded-full w-16 h-16"
                    // onClick={() => setPlayingVideo('main')}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Banking Forward
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             Watch this video to see how Hexacore is transforming financial services through open innovation and trusted, industry-leading solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
         Proud history. Exciting future.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 1993, we’ve pioneered core banking software serving 500+ core and 400+ digital clients worldwide. From our Geneva headquarters, we deliver trusted solutions that empower banks and their customers globally.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Financial institutions of all sizes use our technology on prem or in the cloud—to create new services and deliver transformative banking experiences.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We combine trusted functionality with cutting-edge technology, helping clients unlock growth, serve customers better, and outperform the industry average.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              With deep banking expertise and relentless innovation, we empower financial institutions to shape their technology future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/assets/mission.jpg" 
                alt="Hexacore Leadership Team" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hexacore Leadership Team
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               Meet the visionary leaders shaping innovation and excellence at Hexacore.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                View our leadership team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Forrester Report CTA */}
      <div className="bg-[#28B1D3] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hexacore named a leader in The Forrester Wave™ Report
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Forrester recognizes Hexacore for its superior innovation which includes advanced and responsible AI.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A unique culture of international spirit and entrepreneurship
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Born in Europe, with a global presence, we deliver comprehensive banking technology, compliance, and customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are driven by empowerment, accountability, learning, and collaboration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                e champion inclusivity to make banking better for customers, partners, and investors worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg overflow-hidden relative">
                <img 
                  src="/assets/mission.jpg" 
                  alt="Culture video" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white rounded-full w-16 h-16"
                    // onClick={() => setPlayingVideo('culture')}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-6xl font-bold">30</div>
                  <div className="text-lg">years</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              We serve customers daily while driving social impact, helping financial institutions improve banking and attract top talent.
            </p>
          </div>
        </div>
      </div>

      {/* Measurable Success Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Measurable success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-6xl font-bold mb-4 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#153365] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                The future of banking starts here
              </h2>
              <p className="text-xl text-purple-100 mb-6">
               Discover how our platform empowers financial institutions to navigate change, seize opportunities, and deliver faster, smarter banking. Together, we lead the future of finance – Leading Banking Forward.
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
                  <p className="text-sm text-purple-100">Subscribe for Hexacore news, updates, events</p>
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
              <div className="text-2xl font-bold mb-4">Hexacore</div>
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
              <span>© 2025 Hexacore Lagos Nigeria</span>
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

export default OurMissionPage;