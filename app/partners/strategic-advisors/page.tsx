import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const StrategicAdvisorsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="text-sm text-muted-foreground">
              <Link href="#" prefetch={false}>
              Hexacore
              </Link>{" "}
              {">"}{" "}
              <Link href="#" prefetch={false}>
                Partners
              </Link>{" "}
              {">"} Technology
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Strategic Advisors
            </h1> */}
            <div className='mb-8'>
             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#153365]">
              Strategic Advisors
            </h1>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
              Connect with us
            </Button>
          </div>
          <div className="relative">
            <img 
              src="/assets/strategic.jpg" 
              alt="Professional team meeting" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            To ensure Banking clients make the best long-term decisions for their transformation strategies
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Hexacore provides leading strategic advisors the opportunity to find out more about Hexacore platform and solutions.
          </p>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
            Email us
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The future of banking starts here
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover how our platform helps financial institutions navigate change, embrace new opportunities, and deliver smarter, faster banking. Together, we embrace the future of finance - Leading Banking Forward.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Contact Section */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contact the team</h3>
                <p className="text-gray-600 text-sm">We're here to help.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Attend Event Section */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Attend an event</h3>
                <p className="text-gray-600 text-sm">Join us live and be part of the conversation.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Explore Resources Section */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Explore resources</h3>
                <p className="text-gray-600 text-sm">Expert insights, guides, and news.</p>
              </div>
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
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
                <li><a href="#" className="hover:text-white">Hexacore SaaS</a></li>
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
                <li><a href="#" className="hover:text-white">Temenos Fellows</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-300 gap-4">
              <div>© 2025 Hexacore</div>
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

export default StrategicAdvisorsPage;