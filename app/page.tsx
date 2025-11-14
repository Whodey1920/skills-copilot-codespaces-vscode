import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative min-h-[600px] flex items-center">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-gray-900 space-y-6 p-6 bg-white/90 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold">Raymond Ornelas Law Firm</h1>
            <p className="text-xl md:text-2xl">Experienced legal representation in California</p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:w-3/5 h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asare_bediako_co_law_firm_cover.jfif-VD1Cbu1nddYg8iLigRr9vP6mgyVywV.jpeg"
            alt="Legal symbols including scales of justice and gavel"
            fill
            priority
            className="object-cover"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.5))",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Personal Injury", "Criminal Defense", "Family Law", "Estate Planning"].map((area) => (
            <div key={area} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{area}</h3>
              <p className="mb-4">Expert legal assistance in {area.toLowerCase()} cases.</p>
              <Link href="/practice-areas" className="text-blue-600 hover:underline flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Over 20 years of legal experience</li>
            <li>Personalized attention to every case</li>
            <li>Proven track record of success</li>
            <li>Committed to achieving the best possible outcomes for our clients</li>
            <li>Free initial consultation</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  )
}

