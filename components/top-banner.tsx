import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

export function TopBanner() {
  return (
    <div className="w-full bg-temenos-teal text-white py-3 px-4 md:px-6 flex items-center justify-center text-center text-sm md:text-base relative">
      <p className="max-w-4xl">Hexacore named #1 core banking provider by IBS Intelligence for 20th year.</p>
      <div className="flex items-center gap-4 ml-auto">
        <Button asChild className="bg-white text-temenos-teal hover:bg-gray-100 px-4 py-2 text-sm rounded-full">
          <Link href="#">Download report</Link>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <X className="h-5 w-5" />
          <span className="sr-only">Close banner</span>
        </Button>
      </div>
    </div>
  )
}
