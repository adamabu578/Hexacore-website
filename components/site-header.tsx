"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, SearchIcon, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/assets/hexacore.png" alt="hexa Logo" width={120} height={32} className="rounded-md" />
          </Link>
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[800px] grid-cols-3 gap-3 p-6 ">
                    <li className="row-span-full ">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none">
                        <div className="mb-2 mt-4 text-lg font-medium">Products</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our full range of banking solutions.
                        </p>
                      </div>
                    </li>
                    <div className="grid grid-cols-2 gap-4 col-span-2">
                      <ListItem href="/core-banking" title="Core Banking">
                       Provide complete, modern banking solutions tailored to every customer segment.
                      </ListItem>
                      <ListItem href="/digital-banking" title="Digital Banking">
                        Deliver tailored experiences, frictionless transactions, and fast-track your transformation journey.
                      </ListItem>
                      <ListItem href="/payments" title="Payments">
                        Secure, real-time, and scalable payment processing solutions.
                      </ListItem>
                      <ListItem href="/wealth-management" title="Wealth Management">
                        An integrated wealth management platform that supports both digital and relationship manager experiences.
                      </ListItem>
                    </div>
                    <li className="row-span-full">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none">
                        <div className="mb-2 mt-4 text-lg font-medium">Innovation</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                         Explore our vision for the future of banking.
                        </p>
                      </div>
                    </li>
                    <div className="grid grid-cols-2 gap-4 col-span-2">
                      <ListItem href="/innovation/platform" title="Platform">
                       Build faster with our open platform for smooth integration and agile development.
                      </ListItem>
                      <ListItem href="/innovation/ai" title="AI">
                        Smarter banking, powered by AI.
                      </ListItem>
                      <ListItem href="/innovation/cloud" title="Cloud">
                      Robust and secure cloud-native solutions designed for modern banking at scale.
                      </ListItem>
                    </div>
                    <li className="row-span-full">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/hexacore-saas"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Hexacore SaaS</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Enhance customer engagement and drive growth with modern, resilient, and secure banking services.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-full flex justify-end">
                      <Link href="/temenos-saas" passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group flex items-center")}>
                          Explore SaaS{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] grid-cols-2 gap-3 p-6">
                    <li className="col-span-full">
                      <div className="text-lg font-medium mb-2">Segments</div>
                    </li>
                    <ListItem href="/retail-business-banking" title="Retail & Business">
                      Deliver innovative, personalized solutions for people and enterprises alike.
                    </ListItem>
                    <ListItem href="/corporate-commercial-banking" title="Corporate & Commercial">
                     One solution for efficient corporate and commercial banking.
                    </ListItem>
                    <ListItem href="/wealth-management" title="Wealth Management">
                    An integrated wealth management solution delivering unified experiences for clients and relationship managers.
                    </ListItem>
                    <li className="col-span-full flex justify-end">
                      <Link href="/solutions/segments" passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group flex items-center")}>
                          Discover Our Segments{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] grid-cols-2 gap-3 p-6">
                    <li className="col-span-full">
                      <div className="text-lg font-medium mb-2">Partner Network</div>
                    </li>
                    <ListItem href="/partners/delivery" title="Delivery">
                     Reliable partners ensuring successful Hexacore implementations.
                    </ListItem>
                    <ListItem href="/partners/sales" title="Sales">
                      Worldwide partners expanding the reach of Hexacore sales.
                    </ListItem>
                    <ListItem href="/partners/technology" title="Technology">
                     Scalable technology, cloud, and AI driving the future of banking.
                    </ListItem>
                    <ListItem href="/partners/exchange-partners" title="Exchange Partners">
                      Trusted fintechs delivering integrated, complementary services.
                    </ListItem>
                    <ListItem href="/partners/strategic-advisors" title="Strategic Advisors">
                      Banking transformation powered by experienced strategic consultants.
                    </ListItem>
                    <ListItem href="/partners/developer-community" title="Developer Community">
                     Develop, test, and enhance solutions on Hexacore platforms.
                    </ListItem>
                    <li className="col-span-full flex justify-end">
                      <Link href="/partners/overview" passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group flex items-center")}>
                          Discover Our Partner Network{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] grid-cols-2 gap-3 p-6 list-none">
                    <li className="col-span-full">
                      <div className="text-lg font-medium mb-2">Read</div>
                    </li>
                    <ListItem href="/resources/blogs" title="Blogs">
                   Trends and insights on innovation, technology, and banking.
                    </ListItem>
                    <ListItem href="/resources/asset-library" title="Asset Library">
                     Browse our brochures, whitepapers, and additional resources.
                    </ListItem>
                    <ListItem href="/resources/customer-success-stories" title="Customer Success Stories">
                    Authentic case studies showcasing transformation through Temenos.
                    </ListItem>
                    <ListItem href="/resources/press-releases" title="Press Releases">
                    Stay up to date with our latest news and announcements.
                    </ListItem>
                    <ListItem href="/resources/newsletter-signup" title="Newsletter Sign-up">
                     Join our mailing list for exclusive Hexacore news and thought leadership.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] grid-cols-2 gap-3 p-6 list-none">
                    <li className="col-span-full">
                      <div className="text-lg font-medium mb-2">About Us</div>
                    </li>
                    <ListItem href="/company/vision-strategy" title="Vision & Strategy">
                     Our mission is to lead the next evolution in banking.
                    </ListItem>
                    <ListItem href="/company/approach-to-esg" title="Our Approach to ESG">
                     Integrating sustainability and ethics into all aspects of our decision-making.
                    </ListItem>
                    <ListItem href="/company/leadership" title="Leadership">
                     The team behind our global success.
                    </ListItem>
                    <ListItem href="/company/investor-relations" title="Investor Relations">
                      FFinancial statements, reports, and investor updates.
                    </ListItem>
                    <ListItem href="/company/our-culture" title="Our Culture">
                   e embrace challenges, honor commitments, foster collaboration, and prioritize compassion.
                    </ListItem>
                    {/* <ListItem href="/company/temenos-offices" title="Temenos Offices">
                      We have    offices in 37 countries.
                    </ListItem> */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="hidden md:flex bg-temenos-blue hover:bg-temenos-blue-hover text-white">
            Contact Sales
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 p-6 text-lg font-medium">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Image src="/assets/hexacore.png" alt="hexa Logo" width={120} height={32} />
                </Link>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    Portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <details className="group">
                      <summary className="flex items-center justify-between py-2 cursor-pointer">
                        Products
                        <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="ml-4 mt-2 space-y-2">
                        <Link href="/core-banking" className="block py-1">
                          Core Banking
                        </Link>
                        <Link href="/digital-banking" className="block py-1">
                          Digital Banking
                        </Link>
                        <Link href="/payments" className="block py-1">
                          Payments
                        </Link>
                        <Link href="/wealth-management" className="block py-1">
                          Wealth Management
                        </Link>
                      </div>
                    </details>
                    <details className="group">
                      <summary className="flex items-center justify-between py-2 cursor-pointer">
                        Innovation
                        <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="ml-4 mt-2 space-y-2">
                        <Link href="/innovation/platform" className="block py-1">
                          Platform
                        </Link>
                        <Link href="/innovation/ai" className="block py-1">
                          AI
                        </Link>
                        <Link href="/innovation/cloud" className="block py-1">
                          Cloud
                        </Link>
                      </div>
                    </details>
                    <Link href="/temenos-saas" className="block py-2">
                      Hexacore SaaS
                    </Link>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    Solutions
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-medium">Segments</div>
                    <Link href="/retail-business-banking" className="block py-1">
                      Retail & Business
                    </Link>
                    <Link href="/corporate-commercial-banking" className="block py-1">
                      Corporate & Commercial
                    </Link>
                    <Link href="/wealth-management" className="block py-1">
                      Wealth Management
                    </Link>
                    <Link href="/solutions/segments" className="block py-1 text-blue-600">
                      Discover Our Segments
                    </Link>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    Partners
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-medium">Partner Network</div>
                    <Link href="/partners/delivery" className="block py-1">
                      Delivery
                    </Link>
                    <Link href="/partners/sales" className="block py-1">
                      Sales
                    </Link>
                    <Link href="/partners/technology" className="block py-1">
                      Technology
                    </Link>
                    <Link href="/partners/exchange-partners" className="block py-1">
                      Exchange Partners
                    </Link>
                    <Link href="/partners/strategic-advisors" className="block py-1">
                      Strategic Advisors
                    </Link>
                    <Link href="/partners/developer-community" className="block py-1">
                      Developer Community
                    </Link>
                    <Link href="/partners/overview" className="block py-1 text-blue-600">
                      Discover Our Partner Network
                    </Link>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    Resources
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-medium">Read</div>
                    <Link href="/resources/blogs" className="block py-1">
                      Blogs
                    </Link>
                    <Link href="/resources/asset-library" className="block py-1">
                      Asset Library
                    </Link>
                    <Link href="/resources/customer-success-stories" className="block py-1">
                      Customer Success Stories
                    </Link>
                    <Link href="/resources/press-releases" className="block py-1">
                      Press Releases
                    </Link>
                    <Link href="/resources/newsletter-signup" className="block py-1">
                      Newsletter Sign-up
                    </Link>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer">
                    Company
                    <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="font-medium">About Us</div>
                    <Link href="/company/vision-strategy" className="block py-1">
                      Vision & Strategy
                    </Link>
                    <Link href="/company/approach-to-esg" className="block py-1">
                      Our Approach to ESG
                    </Link>
                    <Link href="/company/leadership" className="block py-1">
                      Leadership
                    </Link>
                    <Link href="/company/investor-relations" className="block py-1">
                      Investor Relations
                    </Link>
                    <Link href="/company/our-culture" className="block py-1">
                      Our Culture
                    </Link>
                    <Link href="/company/temenos-offices" className="block py-1">
                      Temenos Offices
                    </Link>
                  </div>
                </details>
                <Button className="w-full bg-temenos-blue hover:bg-temenos-blue-hover text-white mt-4">
                  Contact Sales
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
