import { ArrowRight } from "lucide-react"
import Link from "next/link"

const practiceAreas = [
  {
    name: "Personal Injury",
    description:
      "We represent clients who have been injured due to the negligence of others, including car accidents, slip and falls, and medical malpractice.",
    cases: ["Car Accidents", "Slip and Fall", "Medical Malpractice", "Workplace Injuries", "Product Liability"],
  },
  {
    name: "Criminal Defense",
    description:
      "Our experienced team provides robust defense for those accused of crimes, from misdemeanors to serious felonies.",
    cases: ["DUI Defense", "Drug Offenses", "Violent Crimes", "White Collar Crimes", "Juvenile Defense"],
  },
  {
    name: "Family Law",
    description: "We help families navigate complex legal matters with compassion and expertise.",
    cases: ["Divorce", "Child Custody", "Child Support", "Spousal Support", "Adoption"],
  },
  {
    name: "Estate Planning",
    description: "Our estate planning services help you protect your assets and provide for your loved ones.",
    cases: ["Wills", "Trusts", "Power of Attorney", "Healthcare Directives", "Probate"],
  },
]

export default function PracticeAreasPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Our Practice Areas</h1>

      {practiceAreas.map((area) => (
        <section key={area.name} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{area.name}</h2>
          <p className="mb-4">{area.description}</p>
          <h3 className="text-xl font-semibold mb-2">Types of Cases We Handle:</h3>
          <ul className="list-disc list-inside mb-4">
            {area.cases.map((caseType) => (
              <li key={caseType}>{caseType}</li>
            ))}
          </ul>
          <Link href="/contact" className="text-blue-600 hover:underline flex items-center">
            Discuss your {area.name.toLowerCase()} case <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </section>
      ))}
    </div>
  )
}
