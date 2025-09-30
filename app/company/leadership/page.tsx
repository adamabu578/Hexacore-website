import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Calendar, BookOpen, Mail, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const HexacoreLeadership = () => {
  const executiveCommittee = [
    // {
    //   name: "Takis Spiliopoulos",
    //   role: "Director, CEO and Chief Financial Officer",
    //   image: "/api/placeholder/200/200"
    // },
    // {
    //   name: "Barb Morgan",
    //   role: "Chief Product and Technology Officer",
    //   image: "/api/placeholder/200/200"
    // },
    {
      name: "Ben Chukwu",
      role: "Chief Revenue Officer",
      image: "/assets/leadership1.jpg"
    },
    {
      name: "Megan Quinn",
      role: "Chief Marketing Officer",
      image: "/assets/leadership2.jpg"
    },
    {
      name: "Aileen Lee",
      role: "Chief People Officer",
      image: "/assets/leadership3.jpg"
    },
    {
      name: " Olumide Soyombo",
      role: "Chief Legal Officer",
      image: "/assets/leadership4.jpg"
    }
  ];

  const boardOfDirectors = [
    // {
    //   name: "Thibault de Tersant",
    //   role: "Chairman, Non-executive Director",
    //   image: "/api/placeholder/200/200"
    // },
    // {
    //   name: "Cecilia Hultén",
    //   role: "Vice-Chair, Independent and non-executive Director",
    //   image: "/api/placeholder/200/200"
    // },
    // {
    //   name: "Maurizio Carli",
    //   role: "Independent and non-executive Director",
    //   image: "/api/placeholder/200/200"
    // },
    {
      name: "Chris Kennedy",
      role: "Independent and non-executive Director",
      image: "/assets/leadership5.jpg"
    },
    {
      name: "David Turner",
      role: "Independent and non-executive Director",
      image: "/assets/leadership6.jpg"
    },
    {
      name: "Linda Ratcliffe",
      role: "Independent and non-executive Director",
      image: "/assets/leadership8.jpg"
    },
    {
      name: "Paul Taylor",
      role: "Independent and non-executive Director",
      image: "/assets/leadeship9.jpg"
    }
  ];

  const footerSections = {
    Portfolio: [
      "Hexacore Platform",
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
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Hexacore<br />Leadership
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Our leadership team is made up of seasoned executives dedicated to driving innovation, growth, and lasting value for our stakeholders.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
                Connect with us
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/assets/leader-hero.jpg" 
                  alt="Leadership team walking" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {executiveCommittee.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium group/btn"
                    >
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boardOfDirectors.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium group/btn"
                    >
                      Read more 
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
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">The future of banking starts here</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
               Discover how our platform empowers financial institutions to navigate change, seize opportunities, and deliver smarter, faster banking. Together, we’re shaping the future of finance – Leading Banking Forward.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Contact the team</h3>
                      <p className="text-blue-100 text-sm">We're here to help.</p>
                    </div>
                    <Users className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Attend an event</h3>
                      <p className="text-blue-100 text-sm">Join us live and be part of the conversation.</p>
                    </div>
                    <Calendar className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-2">Explore resources</h3>
                      <p className="text-blue-100 text-sm">Expert insights, guides, and news.</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-white" />
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
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

export default HexacoreLeadership;