import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Linkedin, Instagram, Twitter, Building, Handshake, Globe, Play, Quote, CheckCircle } from 'lucide-react';

const DiscoverPartnerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="text-sm text-teal-500">
            Home → Partners → Partners
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hexacore Impact Partner Program
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Building a business future with a collaborative approach.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
              Become a Partner
            </Button>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/600/400" 
              alt="Business professional working" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Partner Program Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Temenos Partner Program
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our partner program is designed to help you grow your business alongside ours. We provide the tools, resources, and support you need to deliver exceptional value to your clients while building a sustainable and profitable partnership.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of partners worldwide who are already benefiting from our comprehensive partner ecosystem.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Play className="w-12 h-12 text-blue-900" />
              </div>
              <p className="text-center text-gray-600">Watch our partner program overview video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our objective is to support partners in
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Building new business</h3>
              <p className="text-gray-600 text-sm">Expand your market reach and grow revenue streams</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growing banking practices</h3>
              <p className="text-gray-600 text-sm">Enhance your banking and financial services expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adding new capabilities</h3>
              <p className="text-gray-600 text-sm">Develop new skills and technical competencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate to Innovate Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Collaborate to innovate
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              As we shape the future of finance, successful banking solutions are built through collaborative partnerships. We work with industry-leading partners to deliver innovative solutions that transform how banks operate and serve their customers.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our partner ecosystem includes technology providers, system integrators, consultants, and implementation specialists who share our vision of advancing digital banking transformation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Together, we're building the next generation of banking technology that enables financial institutions to compete and thrive in an increasingly digital world.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/400/500" 
              alt="Manu Sharma" 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Manu Sharma</h3>
              <p className="text-gray-600 text-sm">VP of Partner Strategy and Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Growth Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our partners can grow revenues through:
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Leads</h3>
              <p className="text-gray-600 text-sm">Access qualified opportunities</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Engagement & Delivery</h3>
              <p className="text-gray-600 text-sm">Joint delivery partnerships</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sales</h3>
              <p className="text-gray-600 text-sm">Co-selling opportunities</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Enablement/GTM</h3>
              <p className="text-gray-600 text-sm">Go-to-market support</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-4xl mx-auto">
              Growing partner revenues across 75+ countries, contributing to accelerated partner performance through growing their market presence and establishing thought leadership in the banking sector.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Testimonial */}
      <section className="bg-teal-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-teal-500 mx-auto mb-6" />
          <blockquote className="text-2xl text-gray-900 mb-6 italic">
            "At Wipro, we want to set a new standard for global partnerships, one in which they're flexible, agile, and collaborative, and create the optimum value within our customers, going beyond traditional delivery models and creating a new paradigm for the way we do business together."
          </blockquote>
          <cite className="text-gray-600">
            <strong>Laxmi Singh, Wipro</strong>
          </cite>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hexacore Partner Ecosystem
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our comprehensive partner ecosystem brings together technology partners, system integrators, consultants, and service providers to deliver complete banking solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From implementation to ongoing support, our partners provide the expertise and services that help banks transform their operations and deliver exceptional customer experiences.
            </p>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
              <div className="text-blue-900 text-center">
                <Globe className="w-16 h-16 mx-auto mb-4" />
                <p className="font-semibold">Global Partner Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Sales Partners */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technology Partners */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Technology Partners</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">API and Integration Partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Cloud Infrastructure Partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Security and Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Data Analytics Partners</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Technology partners help extend Hexacore capabilities with specialized solutions and integrations that enhance our core banking platform.
              </p>
              <Button variant="outline" className="mt-6 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full">
                View Technology Partners
              </Button>
            </div>

            {/* Sales Partners */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Sales partners: Three sales approaches</h2>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img src="/api/placeholder/200/120" alt="Self sell" className="w-full h-24 object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2">Self sell</h3>
                  <p className="text-gray-600 text-sm">Partners sell Temenos solutions independently with our support and resources.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img src="/api/placeholder/200/120" alt="Joint selling" className="w-full h-24 object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2">Joint selling</h3>
                  <p className="text-gray-600 text-sm">Collaborative sales approach with shared opportunities and joint go-to-market strategies.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <img src="/api/placeholder/200/120" alt="Referrals" className="w-full h-24 object-cover rounded mb-4" />
                  <h3 className="font-semibold mb-2">Referrals</h3>
                  <p className="text-gray-600 text-sm">Generate revenue through qualified referrals to Temenos solutions and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Become a partner
          </h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region *</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>France</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  I agree to the Terms & Conditions and Privacy Policy
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
                Submit Application
              </Button>
            </div>
          </form>
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
                <p className="text-gray-600 text-sm">Subscribe for Temenos news, updates, events.</p>
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
            <div className="text-2xl font-bold">temenos</div>
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

export default DiscoverPartnerPage;