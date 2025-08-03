import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex px-6", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="text-sm font-medium text-current hover:opacity-80">
            Hexacore
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-current opacity-70" />
            {item.href ? (
              <Link href={item.href} className="ml-1 text-sm font-medium text-current hover:opacity-80">
                {item.label}
              </Link>
            ) : (
              <span className="ml-1 text-sm font-medium text-current opacity-70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
