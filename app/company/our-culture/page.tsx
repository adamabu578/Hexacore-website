import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Calendar, BookOpen, Mail, Facebook, Linkedin, Twitter, Instagram, Heart, Target, Handshake, Trophy } from 'lucide-react';

const HexacoreCulture = () => {
  const values = [
    {
      title: "We challenge",
      description: "We believe great ideas come from asking difficult and brave change. The power to create great ideas lies in an open-minded environment, where great ideas and innovation can come from everyone and everywhere.",
      icon: Target
    },
    {
      title: "We commit",
      description: "We are committed to delivering excellence in everything we do. Our commitment drives us to go above and beyond for our clients.",
      icon: Handshake
    },
    {
      title: "We collaborate",
      description: "We work together as one team, leveraging our collective knowledge and expertise to achieve the best outcomes.",
      icon: Users
    },
    {
      title: "We care",
      description: "We genuinely care about our people, our clients, and the communities we serve. Care is at the heart of everything we do.",
      icon: Heart
    }
  ];

  const cultureItems = [
    {
      title: "Wellbeing at Temenos",
      description: "At Temenos, we are committed to supporting the wellbeing of our people and creating a healthy and safe work environment. Caring for others is fundamental to our values and we believe in a workplace where everyone feels that the Temenos experience is a positive one.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Temenos Volunteers: Giving back to the community",
      description: "We have an active group of volunteers who contribute to projects all over the world. Some of our recent projects include supporting local communities, providing educational support and resources as well as creating general volunteer opportunities throughout our organization to drive our positive impact and progress in our regions or community, tech industry.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Meet our Alumni",
      description: "Meet some of our former colleagues and hear the unique ways in their field. Their incredible achievements since they joined Temenos and discover their perspectives on the value that Temenos brings to their career and to their field, including the networks of talent in the FinTech and the world.",
      image: "/api/placeholder/300/200"
    }
  ];

  const footerSections = {
    Portfolio: [
      "Temenos Platform",
      "Digital Banking",
      "Wealth Management",
      "Payments",
      "Fund",
      "Temenos SaaS"
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
      "Temenos Offices",
      "Careers",
      "Temenos Fellows"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="text-sm text-gray-600 mb-4 flex items-center">
                <span>Our Unique</span>
                <ArrowRight className="mx-2 h-4 w-4" />
                <span>Culture & Diversity</span>
                <ArrowRight className="mx-2 h-4 w-4" />
                <span>Our Culture</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Our Unique<br />Culture
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Because culture powers the company. Our unique spirit of who we are and 
                how we think about things distinguishes us from others in technology and banking.
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Together with our values and clear purpose, understanding what banking can 
                become and what role we can play, brings meaning to our work.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
                Connect with us
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Introduction */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Temenos: Our Values</h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-700 text-lg">
                We are guided by the principles of empowerment and accountability. 
                We have a shared commitment to each other, we see things 
                differently and are committed to do find our passion to make 
                a difference in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Our values are the unique ingredients that<br />
              make up Temenos. We call them the 4 Cs:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
              </div>
            ))}
          </div>

          {/* Featured Value */}
          <Card className="bg-white border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">We challenge</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe great ideas come from asking difficult and brave change. The power to create great ideas lies in an open-minded environment, where great 
                ideas and innovation can come from everyone and everywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diversity Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Diversity, equity & inclusion</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At Temenos, we are committed to building upon fairness so 
                everyone can be themselves and thrive. This starts with our own 
                teams. We know that in the right context, all our people can 
                contribute to the highest levels, have their voices heard, show their 
                perspectives and better collaboration in areas our customers and 
                colleagues so that we keep the true people and tech industry to move 
                forward - together.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are a global company, and we believe that diverse talent we work 
                better when committed to an inclusive environment that help employees 
                thrive and celebrate our diversity and backgrounds within our 
                organisation, but these of our customers, our partners and our 
                communities.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Diverse team collaboration" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Items Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cultureItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-0 bg-white rounded-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.description}</p>
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

      {/* Career CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Become part of a winning team</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Temenos is an exciting place to work and our biggest asset is our 
                people. By choosing a culture of innovation and collaboration, and 
                by working together, we embrace the future of finance and help banks 
                open the best report and ensure we continue to deliver unrivalled 
                customer success.
              </p>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full">
                Explore career opportunities
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Professional woman" 
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl"></div>
              </div>
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
              <h3 className="text-2xl font-bold mb-8">temenos</h3>
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
              <p>© 2025 Temenos Headquarters SA</p>
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

export default HexacoreCulture;