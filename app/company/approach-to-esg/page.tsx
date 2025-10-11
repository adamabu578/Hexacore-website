import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Calendar, BookOpen, Mail, Facebook, Linkedin, Twitter, Instagram, Shield, Handshake, Globe, Leaf, Award, TrendingUp, Building, Heart } from 'lucide-react';

const HexacoreESG = () => {
  const esgMissions = [
    {
      title: "Help our clients and partners transform into smart, sustainable, purpose-driven organisations",
      icon: Shield,
      description: "Supporting transformation initiatives"
    },
    {
      title: "Manage our operations ethically and sustainably",
      icon: Handshake,
      description: "Ethical business practices"
    },
    {
      title: "Contribute to global social and environmental initiatives",
      icon: Globe,
      description: "Making a positive global impact"
    }
  ];

  const commitments = [
    {
      title: "We are committed to sustainable business practices",
      description: "Business sustainability is the foundation of responsible living. We operations thinking 360 degrees, thinking long term and working together as a community.",
      image: "/assets/commitment.jpg"
    },
    {
      title: "We are committed to working together to achieve our goals",
      description: "Developing the future talent pipeline and nurturing the next generation of leaders.",
      image: "/assets/commitment1.jpg"
    },
    {
      title: "We are committed to working for the benefit of the communities around us",
      description: "Supporting our local communities through volunteering and community projects.",
      image: "/assets/commitment2.jpg"
    }
  ];

  const esgCredentials = [
    {
      title: "Our endorsements",
      description: "We have gained key certifications and endorsements from leading sustainability organisations.",
      buttonText: "View more",
      color: "blue"
    },
    {
      title: "Our achievements",
      description: "Learn about what we're doing and see our sustainable initiatives and International Sustainability and Development Foundation.",
      buttonText: "Learn more", 
      color: "blue"
    },
    {
      title: "Our reports and resources",
      description: "Explore ESG key corporate governance and sustainability disclosure documents and additional related resources.",
      buttonText: "View more",
      color: "blue"
    }
  ];

  const strategicAreas = [
    {
      title: "Operating Responsibly",
      description: "Ethics Business Conduct and Governance | Compliance Security, Risk Privacy and Cybersecurity | Sustainable Product Development | Responsible Procurement",
      image: "/assets/cyber-security.jpg"
    },
    {
      title: "Caring for the planet",
      description: "Environmental Policy | Environmental Management System | Exploring Space to Reducing our Environmental Footprint | Climate Action | Sustainable Development and Reporting | Environmental Monitoring",
      image: "/assets/planet.jpg"
    },
    {
      title: "Investing in Our People",
      description: "Diversity, Inclusion and Equal Opportunity | Human Rights at all Temenos Businesses | Wellbeing and Workplace Culture | Learning and Development | Talent and Performance | Equal Performance",
      image: "/assets/investment.jpg"
    },
    // {
    //   title: "Achieving Business Excellence",
    //   description: "Business Performance and Business Impact | Innovation and Technology | Data Ethics | Product Responsibility",
    //   image: "/api/placeholder/300/200"
    // },
    // {
    //   title: "Enabling Access to Financial Services",
    //   description: "Financial Inclusion Platforms",
    //   image: "/api/placeholder/300/200"
    // },
    // {
    //   title: "Investing in Our Communities",
    //   description: "Community Investment | Employee Volunteering",
    //   image: "/api/placeholder/300/200"
    // }
  ];

  const footerSections = {
    Portfolio: [
      "Temenos Platform",
      "Digital Banking",
      "Wealth Management",
      "Payments",
      "Fund",
      "Hexacore SaaS"
    ],
    Solutions: [
      "Digital Transformation",
      "Corporate & Commercial Banking",
      "Wealth Management",
      "Banking in the Cloud",
      "Credit Unions & Community Banks",
      "Inclusive & Community Banking",
      "Augmented Solutions"
    ],
    Partners: [
      "Partner Program",
      "Delivery",
      "Sales",
      "Technology",
      "Solution Providers",
      "Strategic Advisors",
      "Developer Community",
      "Innovation Sign-up"
    ],
    Resources: [
      "Research",
      "Asset Library",
      "Customer Success Stories",
      "Press Releases",
      "Newsletter Sign-up",
      "Videos",
      "Webinar Library",
      "Events",
      "Webinars",
      "Value Framework",
      "Ambassador Program"
    ],
    Company: [
      "About Us",
      "Our Approach to ESG",
      "Leadership",
      "Investor Relations",
      "Our Culture",
      "Hexacore Offices",
      "Careers",
      "Hexacore Fellows"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="text-sm text-gray-600 mb-4">
                Our Approach to ESG
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#153365] mb-6 leading-tight">
                Our Approach to<br />ESG
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Our goal is for one business is a one that takes care of the world 
                and the people in it business every asset.
              </p>
              <Button className="bg-blue-[#153365] hover:bg-[#28B1D3] text-white px-8 py-3 rounded-full">
                Learn more
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/assets/commitment-hero.jpg" 
                  alt="ESG collaboration" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#153365] mb-6">
                Hexacore has seen that technology has the power to change our world.
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed">
                We want to give our business the way the systems that 
                businesses operates in, and to comes about to help with out on 
                environmental, social and sustainable outcomes that biggest influence 
                on our world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#153365] mb-16">Our ESG mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgMissions.map((mission, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <mission.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#153365] mb-4 leading-tight">
                    {mission.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#153365] mb-16">Our commitment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={commitment.image} 
                      alt={commitment.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#153365] mb-4 leading-tight">{commitment.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{commitment.description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-[#153365] hover:text-blue-800 p-0 h-auto font-medium group/btn"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Message from our Non-Executive Chairman<br />
              and our Chief Executive Officer
            </h2>
            
            <div className="bg-blue-600 w-16 h-12 mx-auto mb-8 flex items-center justify-center rounded">
              <span className="text-white text-2xl">"</span>
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              "Our focus on sustainable value for all makes are business sense and is an integral part of how we 
              operate, innovate and navigate this world of change."
            </blockquote>
            
            <p className="text-gray-600 mb-8">
              Thibault de Tersant Non-Executive Chairman
            </p>
            
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
              Read our ESG message
            </Button>
          </div>
        </div>
      </section>

      {/* ESG Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Explore our ESG credentials</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {esgCredentials.map((credential, index) => (
              <Card key={index} className="bg-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{credential.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{credential.description}</p>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                    {credential.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Our ESG strategic areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{area.description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium group/btn"
                    >
                      Learn more 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#28B1D3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">The future of banking starts here</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Discover how our platform helps financial institutions navigate 
                change, embrace new opportunities, and deliver smarter, faster 
                banking. Together, we embrace the future of finance – Leading 
                Banking Forward.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="space-y-6">
                <Card className="bg-[#153365] border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Contact the team</h3>
                      <p className="text-blue-100 text-sm">We're here to help.</p>
                    </div>
                    <Users className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-[#153365] border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Attend an event</h3>
                      <p className="text-blue-100 text-sm">Join us live and be part of the conversation.</p>
                    </div>
                    <Calendar className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-[#153365] border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Explore resources</h3>
                      <p className="text-blue-100 text-sm">Expert insights, guides, and news.</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-[#153365] border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Newsletter sign-up</h3>
                      <p className="text-blue-100 text-sm">Subscribe for Hexacore news, updates, events.</p>
                    </div>
                    <Mail className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-8">Hexacore</h3>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
              <p>© 2025 Hexacore Lagos Nigeria</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Supplier Information</a>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HexacoreESG;