import Image from "next/image"

export default function CorporateCommercialSegmentIndustryRecognition() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Industry Recognition</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Our commitment to innovation and excellence in corporate and commercial banking has been recognized by leading
          industry analysts and awards.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Award Logo 1"
            width={200}
            height={100}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Award Logo 2"
            width={200}
            height={100}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Award Logo 3"
            width={200}
            height={100}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Award Logo 4"
            width={200}
            height={100}
            className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}
