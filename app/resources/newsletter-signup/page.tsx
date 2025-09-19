"use client";
import React, { useState } from 'react';
import { ArrowRight, Mail, Calendar, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    if (email && country && isVerified) {
      console.log({ email, country, isVerified });
      // Add your submission logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-[#153365]">Hexacore</div>
              <span className="text-gray-400"></span>
              <span className="text-gray-600">Newsletter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#153365] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
             Insights from the world’s largest banking community
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Join 1,000 of your peers and sign-up now to get the regional Hexacore Newsletter with news and updates about our products, services and events.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/assets/profession.jpg"
                  alt="Professionals collaborating" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#153365] mb-6">Subscribe today</h2>
          <h3 className="text-2xl font-semibold text-[#153365] mb-4">
            Want Insights From the World's Largest Banking Community?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Stay ahead: Sign up for the Hexacore Newsletter and join 1,000 peers already in the know.
          </p>
        </div>

        <Card className="bg-white max-w-2xl mx-auto border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Company Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <Label htmlFor="country" className="text-sm font-medium text-gray-700 mb-2 block">
                  Country *
                </Label>
                <Input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded bg-gray-50">
                <Checkbox
                  id="recaptcha"
                  checked={isVerified}
                  onCheckedChange={setIsVerified}
                />
                <label htmlFor="recaptcha" className="text-sm text-gray-700">
                  I'm not a robot
                </label>
                <div className="ml-auto">
                  <div className="text-xs text-gray-500">
                    <div>reCAPTCHA</div>
                    <div className="flex space-x-1 text-xs">
                      <span>Privacy</span>
                      <span>-</span>
                      <span>Terms</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2 rounded"
                disabled={!isVerified}
              >
                Subscribe
              </Button>

              <div className="text-xs text-gray-600 leading-relaxed">
                By signing up, you’ll receive our newsletter via Salesforce. You can opt out anytime. See our [Privacy Policy] for details.
                <a href="#" className="text-indigo-600 hover:underline">privacy policy</a>.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#153365] mb-4">
                The future of banking starts here
              </h2>
              <p className="text-gray-600 mb-6">
               Discover how our platform helps banks adapt, innovate, and deliver smarter, faster services — leading the future of finance.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Contact the team</h3>
                      <p className="text-gray-600 text-sm">We're here to help.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Attend an event</h3>
                      <p className="text-gray-600 text-sm">Join us live and be part of the conversation.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Explore resources</h3>
                      <p className="text-gray-600 text-sm">Expert insights, guides, and news.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Newsletter sign-up</h3>
                      <p className="text-gray-600 text-sm">Subscribe for Temenos news, updates, events.</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-teal-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Social */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Hexacore</h3>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center cursor-pointer hover:bg-indigo-600">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center cursor-pointer hover:bg-indigo-600">
                  <span className="text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center cursor-pointer hover:bg-indigo-600">
                  <span className="text-xs font-bold">@</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center cursor-pointer hover:bg-indigo-600">
                  <span className="text-xs font-bold">X</span>
                </div>
              </div>
            </div>
            
            {/* Portfolio */}
            <div>
              <h4 className="font-semibold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li><a href="#" className="hover:text-white">Core Banking</a></li>
                <li><a href="#" className="hover:text-white">Digital Banking</a></li>
                <li><a href="#" className="hover:text-white">Wealth Management</a></li>
                <li><a href="#" className="hover:text-white">Platform</a></li>
                <li><a href="#" className="hover:text-white">AI</a></li>
                <li><a href="#" className="hover:text-white">Cloud</a></li>
                <li><a href="#" className="hover:text-white">Temenos SaaS</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
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

            {/* Partners */}
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
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

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
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

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
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

          {/* Footer Bottom */}
          <div className="border-t border-indigo-800 mt-12 pt-8 text-sm text-indigo-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 Hexacore Lagos Nigeria</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Cookie Policy</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Supplier Information</a>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterPage;