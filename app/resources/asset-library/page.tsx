"use client"
import React, { useState } from 'react';
import { Search, Filter, Download, ArrowRight, Users, TrendingUp, Building, Globe, ChevronDown, Check } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  icon: React.ReactNode;
  solution?: string;
  topic?: string;
  resourceType?: string;
  region?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterState {
  solution: string;
  topic: string;
  resourceType: string;
  region: string;
}

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<FilterState>({
    solution: '',
    topic: '',
    resourceType: '',
    region: ''
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const solutionOptions: DropdownOption[] = [
    { value: '', label: 'All Solutions' },
    { value: 'core-banking', label: 'Core Banking' },
    { value: 'payments', label: 'Payments' },
    { value: 'wealth-management', label: 'Wealth Management' },
    { value: 'digital-banking', label: 'Digital Banking' },
  ];

  const topicOptions: DropdownOption[] = [
    { value: '', label: 'All Topics' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'gen-z-banking', label: 'Gen Z Banking' },
    { value: 'performance', label: 'Performance' },
    { value: 'innovation', label: 'Innovation' },
  ];

  const resourceTypeOptions: DropdownOption[] = [
    { value: '', label: 'All Resource Types' },
    { value: 'report', label: 'Report' },
    { value: 'white-paper', label: 'White Paper' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'webinar', label: 'Webinar' },
  ];

  const regionOptions: DropdownOption[] = [
    { value: '', label: 'All Regions' },
    { value: 'asia-pacific', label: 'Asia Pacific' },
    { value: 'europe', label: 'Europe' },
    { value: 'americas', label: 'Americas' },
    { value: 'middle-east', label: 'Middle East' },
  ];

  const resources: Resource[] = [
    {
      id: 1,
      title: "Hexacore Performance Benchmark 2025",
      description: "Discover advanced technology innovations that are sustainable. Check out our latest report with Mento...",
      category: "Report",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <TrendingUp className="w-6 h-6" />,
      solution: 'core-banking',
      topic: 'performance',
      resourceType: 'report',
      region: 'europe'
    },
    {
      id: 2,
      title: "Credit union member experience: Accelerating digitization in credit unions for a Gen Z future",
      description: "Discover how banks and credit unions can accelerate digitization and deliver superior, Gen Z-ready digital experiences.",
      category: "White Paper",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="w-6 h-6" />,
      solution: 'digital-banking',
      topic: 'gen-z-banking',
      resourceType: 'white-paper',
      region: 'americas'
    },
    {
      id: 3,
      title: "A New Era for Building Societies",
      description: "UK building societies could grow 72% annually—if tech and regulatory align. Discover more with Temenos in the 2025 report.",
      category: "White Paper and Report",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Building className="w-6 h-6" />,
      solution: 'core-banking',
      topic: 'digital-transformation',
      resourceType: 'white-paper',
      region: 'europe'
    },
    {
      id: 4,
      title: "IBSI Sales League Table 2025: Temenos #1 for Core Banking",
      description: "Temenos has been recognized as the #1 best-selling software provider in 13 categories in the IBSI Sales League Table 2025.",
      category: "Report",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <TrendingUp className="w-6 h-6" />,
      solution: 'core-banking',
      topic: 'performance',
      resourceType: 'report',
      region: 'europe'
    },
    {
      id: 5,
      title: "Key Trends in Wealth Management 2025",
      description: "Wealth management in 2025 will transform through tech innovation, changing client needs, and global economic shifts.",
      category: "White Paper",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <TrendingUp className="w-6 h-6" />,
      solution: 'wealth-management',
      topic: 'innovation',
      resourceType: 'white-paper',
      region: 'europe'
    },
    {
      id: 6,
      title: "Event Processing Reports Vietnam",
      description: "A Luncheon Roundtable on 09 July 2024.",
      category: "White Paper and Report",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Globe className="w-6 h-6" />,
      solution: 'payments',
      topic: 'digital-transformation',
      resourceType: 'report',
      region: 'asia-pacific'
    },
    {
      id: 7,
      title: "Event Processing Reports Indonesia",
      description: "Finance Indonesia Dialogue 2024 explored digital innovation, customer-centric tech, and data use amid evolving regulations.",
      category: "Report",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Globe className="w-6 h-6" />,
      solution: 'digital-banking',
      topic: 'digital-transformation',
      resourceType: 'report',
      region: 'asia-pacific'
    },
    {
      id: 8,
      title: "Event Processing Reports Hong Kong",
      description: "At the Asian Banker Summit on 23 May in Hong Kong, tech and digital speakers from APAC banks discussed...",
      category: "Report",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Globe className="w-6 h-6" />,
      solution: 'payments',
      topic: 'innovation',
      resourceType: 'report',
      region: 'asia-pacific'
    },
    {
      id: 9,
      title: "Event Processing Reports Philippines",
      description: "The Guidice, AML, Red Hat, and Temenos hosted a Luncheon Roundtable on 26 September 2024, exploring digital transformation.",
      category: "Report",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Globe className="w-6 h-6" />,
      solution: 'core-banking',
      topic: 'digital-transformation',
      resourceType: 'report',
      region: 'asia-pacific'
    }
  ];

  const filteredResources = resources.filter((resource: Resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSolution = !filters.solution || resource.solution === filters.solution;
    const matchesTopic = !filters.topic || resource.topic === filters.topic;
    const matchesResourceType = !filters.resourceType || 
                               resource.resourceType === filters.resourceType ||
                               (filters.resourceType === 'white-paper' && resource.category.toLowerCase().includes('white paper')) ||
                               (filters.resourceType === 'report' && resource.category.toLowerCase().includes('report'));
    const matchesRegion = !filters.region || resource.region === filters.region;

    return matchesSearch && matchesSolution && matchesTopic && matchesResourceType && matchesRegion;
  });

  const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
    const isOpen = openDropdown === label;
    const selectedOption = options.find(option => option.value === value);

    return (
      <div className="relative">
        <button
          onClick={() => setOpenDropdown(isOpen ? null : label)}
          className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 min-w-[160px]"
        >
          <span>{selectedOption?.label || label}</span>
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setOpenDropdown(null)}
            />
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setOpenDropdown(null);
                  }}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            {resource.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {resource.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:gap-2 transition-all">
            View report
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      solution: '',
      topic: '',
      resourceType: '',
      region: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Learn more about our products and rich functionalities here
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Dropdown
                label="Solutions"
                options={solutionOptions}
                value={filters.solution}
                onChange={(value) => handleFilterChange('solution', value)}
              />
              <Dropdown
                label="Topics"
                options={topicOptions}
                value={filters.topic}
                onChange={(value) => handleFilterChange('topic', value)}
              />
              <Dropdown
                label="Resource Types"
                options={resourceTypeOptions}
                value={filters.resourceType}
                onChange={(value) => handleFilterChange('resourceType', value)}
              />
              <Dropdown
                label="Regions"
                options={regionOptions}
                value={filters.region}
                onChange={(value) => handleFilterChange('region', value)}
              />
              
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                  Reset filters
                </button>
              )}
              
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest resources from Hexacore</h2>
          <p className="text-gray-600">{filteredResources.length} Results</p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource: Resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No resources found</div>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Pagination */}
        {filteredResources.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 font-medium">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 font-medium">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-700 font-medium">
              23
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#153365] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                The future of banking starts here
              </h2>
              <p className="text-blue-100 mb-6">
                Discover how our platform helps financial institutions navigate change, embrace new opportunities, and deliver smarter, faster banking. Together, we embrace the future of finance – Leading Banking Forward.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">Contact the team</div>
                  <div className="text-sm text-blue-100">We're here to help.</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">Attend an event</div>
                  <div className="text-sm text-blue-100">Join us live and be part of the conversation.</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">Explore resources</div>
                  <div className="text-sm text-blue-100">Expert insights, guides, and news.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;