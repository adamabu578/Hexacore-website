import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-temenos-blue text-white py-12">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/hexacore.png" alt="Hexacore Logo" width={100} height={40}  className="rounded-md"/>
          </Link>
          <p className="text-sm">
            Hexacore is the world’s leader in banking software, partnering with banks and fintechs to transform their
            businesses.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Products</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/core-banking" className="text-sm hover:underline">
                Core Banking
              </Link>
            </li>
            <li>
              <Link href="/digital-banking" className="text-sm hover:underline">
                Digital Banking
              </Link>
            </li>
            <li>
              <Link href="/payments" className="text-sm hover:underline">
                Payments
              </Link>
            </li>
            <li>
              <Link href="/wealth-management" className="text-sm hover:underline">
                Wealth Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Solutions</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/retail-business-banking" className="text-sm hover:underline">
                Retail & Business Banking
              </Link>
            </li>
            <li>
              <Link href="/corporate-commercial-banking" className="text-sm hover:underline">
                Corporate & Commercial Banking
              </Link>
            </li>
            <li>
              <Link href="/wealth-management" className="text-sm hover:underline">
                Wealth Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/company/about-us" className="text-sm hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/company/careers" className="text-sm hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/resources/press-releases" className="text-sm hover:underline">
                Press & Media
              </Link>
            </li>
            <li>
              <Link href="/company/investor-relations" className="text-sm hover:underline">
                Investor Relations
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Temenos. All rights reserved.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="hover:underline">
            Cookie Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
