import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Calendar, BookOpen, Mail, Facebook, Linkedin, Twitter, Instagram, TrendingUp, FileText, Building, DollarSign, BarChart3, Download, ExternalLink } from 'lucide-react';

const HexacoreInvestorRelations = () => {
  const recentNews = [
    {
      date: "Dec 12, 2024",
      title: "Hexacore Declares Plan for 2025 share purchase programme",
      description: "The Board of Directors of Hexacore AG has approved a new share purchase programme for 2025.",
      category: "Financial News"
    },
    {
      date: "Nov 15, 2024", 
      title: "Q3 2024 Financial Results",
      description: "Strong performance continues with revenue growth of 8.5% year-over-year.",
      category: "Earnings"
    },
    {
      date: "Oct 28, 2024",
      title: "Strategic Partnership Announcement", 
      description: "New collaboration to accelerate digital banking transformation globally.",
      category: "Business Update"
    }
  ];

  const digitalPlace = [
    {
      title: "Dedicated portal for private stakeholders",
      description: "Access comprehensive investor information and resources through our dedicated portal.",
      buttonText: "Visit portal"
    },
    {
      title: "Webcasts and conference calls",
      description: "Join our quarterly earnings calls and strategic updates.",
      buttonText: "View schedule" 
    },
    {
      title: "Corporate governance information",
      description: "Complete transparency in our governance practices and board composition.",
      buttonText: "Learn more"
    }
  ];

  const pressReleases = [
    {
      date: "Dec 10, 2024",
      title: "Hexacore Declares Dividend for 2024 Financial Year",
      description: "Board recommends dividend payment of CHF 2.85 per share.",
      category: "Financial"
    },
    {
      date: "Nov 28, 2024", 
      title: "Hexacore Announces CEO Transition Plan",
      description: "Strategic leadership transition to drive next phase of growth.",
      category: "Corporate"
    },
    {
      date: "Oct 15, 2024",
      title: "Innovation Awards Recognition",
      description: "Hexacore wins multiple industry awards for banking technology innovation.",
      category: "Awards"
    }
  ];

  const financialCalendar = [
    { date: "Mar 15, 2025", event: "Q4 2024 Results" },
    { date: "Apr 22, 2025", event: "Annual General Meeting" },
    { date: "May 8, 2025", event: "Q1 2025 Results" },
    { date: "Aug 7, 2025", event: "H1 2025 Results" },
    { date: "Nov 6, 2025", event: "Q3 2025 Results" }
  ];

  const governanceItems = [
    {
      title: "Board of Directors",
      description: "Meet our experienced board members and their backgrounds.",
      image: "/assets/board.jpg"
    },
    {
      title: "Annual reports and governance information",
      description: "Access comprehensive annual reports and corporate governance documents.",
      image: "/assets/annual-report.jpg"
    },
    {
      title: "Corporate governance",
      description: "Learn about our governance framework, policies and compliance measures.",
      image: "/assets/investor1.jpg"
    }
  ];

  const shareholderInfo = [
    {
      title: "Share information",
      description: "Real-time share price, trading volume and market data.",
      image: "/assets/annual-report.jpg"
    },
    {
      title: "Analyst Coverage and Reports",
      description: "Independent research and analyst coverage of Temenos.",
      image: "/assets/annual-report1.jpg"
    },
    {
      title: "Dividend information",
      description: "Historical dividend payments and policy information.",
      image: "/assets/annual-report2.jpg"
    },
    // {
    //   title: "Articles of association and registration",
    //   description: "Official company documents and registration details.",
    //   image: "/api/placeholder/200/150"
    // },
    // {
    //   title: "AGM Information",
    //   description: "Annual general meeting materials and voting information.",
    //   image: "/api/placeholder/200/150"
    // },
    // {
    //   title: "Key contacts",
    //   description: "Direct contact information for investor relations team.",
    //   image: "/api/placeholder/200/150"
    // }
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
      "Hexcore Fellows"
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
                Relations
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Welcome to the Temenos Investor Relations portal. Find the latest financial 
                information, corporate governance details, and shareholder resources.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
                View latest financials
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/assets/investor-relation.jpg" 
                  alt="Business meeting" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Recent news</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {recentNews.map((news, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <div className="text-xs text-blue-600 font-medium mb-3">{news.category}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 leading-tight">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{news.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium group/btn"
                  >
                    Read more 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
              View all news
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Place Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Navigate to the digital place</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {digitalPlace.map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                    {item.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900">Press releases</h2>
            <Button 
              variant="outline" 
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              View all releases
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                  <div className="text-xs text-blue-600 font-medium mb-3">{release.category}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 leading-tight">{release.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{release.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto font-medium group/btn"
                  >
                    Read more 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Price Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Hexacore share price</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-8">
            <div className="text-gray-500">
              <TrendingUp className="h-16 w-16 mx-auto mb-4" />
              <p>Share price chart placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Calendar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Financial calendar</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialCalendar.map((item, index) => (
                <Card key={index} className="bg-blue-50 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-blue-900 mb-2">{item.date}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results and Reports Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-16">Results, presentations & reports</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-0 bg-white rounded-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src="/assets/annual-report.jpg" 
                    alt="Annual report" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Annual reports and presentations</h3>
                  <p className="text-gray-600 mb-6">Access our comprehensive annual reports and investor presentations.</p>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                    View reports
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-0 bg-white rounded-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src="/assets/annual-report3.jpg" 
                    alt="Interim results" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Interim reports and regulatory submissions</h3>
                  <p className="text-gray-600 mb-6">Quarterly and interim financial reports and regulatory filings.</p>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                    View reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Governance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Corporate governance</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Learn about our governance framework, board composition, and commitment to transparency 
            and accountability in all our business operations.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governanceItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{item.description}</p>
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

      {/* Shareholder Information Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-16">Shareholder & other information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shareholderInfo.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                  <Button 
                    size="sm"
                    className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-full"
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Signup Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">News Signup</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Subscribe to our investor alerts</h3>
              <p className="text-gray-700 mb-6">Stay informed with the latest financial news, earnings releases, and important investor updates.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Quarterly earnings announcements</li>
                <li>• Press releases and corporate news</li>
                <li>• AGM and investor event notifications</li>
                <li>• Regulatory filing updates</li>
              </ul>
            </div>
            <div>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-blue-900 mb-6">Sign up for investor news</h4>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                Discover how our platform helps financial institutions navigate 
                change, embrace new opportunities, and deliver smarter, faster 
                banking. Together, we embrace the future of finance – Leading 
                Banking Forward.
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
                      <p className="text-blue-100 text-sm">Subscribe for Temenos news, updates, events.</p>
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

export default HexacoreInvestorRelations;