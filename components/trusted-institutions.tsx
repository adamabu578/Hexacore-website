// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export function TrustedInstitutions() {
//   const logos = [
//     { src: "/assets/alat.JPG", alt: "ALT" },
//     { src: "/assets/kuda.png", alt: "kuda Bank" },
//     { src: "/assets/opay.jpeg", alt: "OPAY" },
//     { src: "/assets/interswitch.png", alt: "interswitch" },
//     { src: "/assets/opay.jpeg", alt: "opay" },
//   ]

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container px-4 md:px-6 text-center">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
//           Why the world&apos;s top financial institutions trust hexacore
//         </h2>
//         <Button className="mb-12 bg-temenos-blue hover:bg-temenos-blue-hover text-white">
//           Explore our success stories
//         </Button>
//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 ">
//           {logos.map((logo, index) => (
//             <Image
//               key={index}
//               src={logo.src || "/placeholder.svg"}
//               alt={logo.alt}
//               width={200}
//               height={50}
//               objectFit="contain"
//               className="max-h-[50px] w-auto"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TrustedInstitutions() {
  const logos = [
    { src: "/assets/alat.JPG", alt: "ALT" },
    { src: "/assets/kuda.png", alt: "kuda Bank" },
    { src: "/assets/opay.jpeg", alt: "OPAY" },
    { src: "/assets/interswitch.png", alt: "interswitch" },
    { src: "/assets/opay.jpeg", alt: "opay" },
  ]

  const scrollingLogos = [...logos, ...logos] // Duplicate for seamless loop

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
          Why the world&apos;s top financial institutions trust hexacore
        </h2>
        <Button className="mb-12 bg-[#153365] hover:bg-[#28B1D3] text-white">
          Explore our success stories
        </Button>

        {/* Scrolling logos horizontally */}
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-scrollRight">
            {scrollingLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={40}
                  className="object-contain max-h-[50px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
