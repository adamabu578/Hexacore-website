import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, RefreshCw, ChevronDown, ArrowRight, Facebook, Linkedin, Instagram, X } from "lucide-react"

export default function DeliveryPartnersPage() {
  const partners = [
    {
      name: "Accenture",
      logo: "/placeholder.svg?height=150&width=250&text=Accenture",
      description: null,
    },
    {
      name: "Accompany",
      logo: "/placeholder.svg?height=150&width=250&text=Accompany",
      description: null,
    },
    {
      name: "Accutive",
      logo: "/placeholder.svg?height=150&width=250&text=Accutive",
      description: null,
    },
    {
      name: "Aspire Systems",
      logo: "/placeholder.svg?height=150&width=250&text=Aspire Systems",
      description: null,
    },
    {
      name: "Banktech Software Services",
      logo: "/placeholder.svg?height=150&width=250&text=Banktech Software Services",
      description: null,
    },
    {
      name: "BCT (Bahwan CyberTek)",
      logo: "/placeholder.svg?height=150&width=250&text=BCT (Bahwan CyberTek)",
      description:
        "BCT is an exclusive sales and delivery partner for all Temenos products and solutions in India, Sri Lanka, Nepal and Bhutan",
    },
    {
      name: "Capgemini",
      logo: "/placeholder.svg?height=150&width=250&text=Capgemini",
      description: null,
    },
    {
      name: "ClearSight",
      logo: "/placeholder.svg?height=150&width=250&text=ClearSight",
      description: null,
    },
    {
      name: "Cognizant",
      logo: "/placeholder.svg?height=150&width=250&text=Cognizant",
      description: null,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col space-y-4 z-10">
            <div className="text-sm text-muted-foreground">
              <Link href="#" prefetch={false}>
                Temenos
              </Link>{" "}
              {">"}{" "}
              <Link href="#" prefetch={false}>
                Partners
              </Link>{" "}
              {">"} Delivery
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#253863]">
              Delivery partners
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">Learn more about our delivery partners.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-6 py-3 rounded-full bg-[#253863] text-white hover:bg-[#1a2b4d]">
                Connect with us
              </Button>
              <Button variant="ghost" className="px-6 py-3 rounded-full text-[#008080] hover:bg-gray-100">
                Our Delivery Partner Certifications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full lg:w-[600px] lg:justify-self-end">
            <Card className="w-full h-full bg-gray-200 flex items-center justify-center">
              <CardContent className="text-muted-foreground">Image Placeholder</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f5f9]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#253863]">
                Our trusted network of partners and providers
              </h2>
              <p className="text-muted-foreground">Total: 45</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="search" placeholder="Search" className="pl-9 pr-4 py-2 rounded-full w-full" />
              </div>
              <Button variant="ghost" className="flex items-center gap-2 text-[#008080] hover:bg-gray-100 rounded-full">
                <RefreshCw className="w-4 h-4" />
                Reset filters
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 rounded-full bg-transparent">
                    Regions
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>North America</DropdownMenuItem>
                  <DropdownMenuItem>Europe</DropdownMenuItem>
                  <DropdownMenuItem>Asia</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="rounded-lg shadow-sm overflow-hidden bg-white">
                <CardHeader className="flex items-center justify-center p-6">
                  {" "}
                  {/* Removed border-b */}
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={250} // Increased width
                    height={150} // Increased height
                    className="object-contain max-h-[180px]" // Adjusted max-height
                  />
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  <div className="inline-block bg-[#008080] text-white text-xs px-2 py-1 rounded-full">Delivery</div>
                  <CardTitle className="text-xl font-bold text-[#253863]">{partner.name}</CardTitle>
                  {partner.description && (
                    <CardDescription className="text-muted-foreground text-sm">{partner.description}</CardDescription>
                  )}
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-[#008080] hover:underline text-sm"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#253863]">
              The future of banking starts here
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover how our platform helps financial institutions navigate change, embrace new opportunities, and
              deliver smarter, faster banking. Together, we embrace the future of finance – Leading Banking Forward.
            </p>
          </div>
          <div className="grid gap-4">
            <Card className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-[#f0f5f9]">
              <div>
                <CardTitle className="text-lg font-semibold text-[#253863]">Contact the team</CardTitle>
                <CardDescription className="text-muted-foreground">We&apos;re here to help.</CardDescription>
              </div>
              <ArrowRight className="w-6 h-6 text-[#008080]" />
            </Card>
            <Card className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-[#f0f5f9]">
              <div>
                <CardTitle className="text-lg font-semibold text-[#253863]">Attend an event</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Join us live and be part of the conversation.
                </CardDescription>
              </div>
              <ArrowRight className="w-6 h-6 text-[#008080]" />
            </Card>
            <Card className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-[#f0f5f9]">
              <div>
                <CardTitle className="text-lg font-semibold text-[#253863]">Explore resources</CardTitle>
                <CardDescription className="text-muted-foreground">Expert insights, guides, and news.</CardDescription>
              </div>
              <ArrowRight className="w-6 h-6 text-[#008080]" />
            </Card>
            <Card className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-[#f0f5f9]">
              <div>
                <CardTitle className="text-lg font-semibold text-[#253863]">Newsletter sign-up</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Subscribe for Temenos news, updates, events.
                </CardDescription>
              </div>
              <ArrowRight className="w-6 h-6 text-[#008080]" />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#253863] text-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4">
            <Link href="#" className="font-bold text-2xl" prefetch={false}>
              temenos
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
                <X className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold mb-2">Portfolio</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Core Banking
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Digital Banking
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Wealth Management
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Platform
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              AI
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Cloud
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Temenos SaaS
            </Link>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold mb-2">Solutions</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Retail & Business
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Corporate & Commercial
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Wealth Management
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Banking Experiences
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Credit Unions & Community
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Islamic Banking
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Inclusive & Community
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Regionalized Solutions
            </Link>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold mb-2">Partners</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Become a Partner
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Delivery
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sales
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Technology
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Solution Providers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Strategic Advisors
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Developer Community
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Newsletter Sign-up
            </Link>
          </div>
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold mb-2">Resources</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blogs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Asset Library
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Customer Success Stories
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Press Releases
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Newsletter Sign-up
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Videos
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Webinar Replays
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Events
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Webinars
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Value Benchmark
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Ambassador Program
            </Link>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-8 pt-8 border-t border-gray-700 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{"© 2025 Temenos Headquarters SA"}</p>
          <nav className="flex gap-4 md:gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Supplier Information
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
