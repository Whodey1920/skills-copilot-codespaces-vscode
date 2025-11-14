import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Raymond Ornelas Law Firm</h3>
            <p>Experienced legal representation in California</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-gray-300 transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-gray-300 transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:Raymondornelaslawfirm.org@gmail.com" className="hover:text-gray-300 transition-colors">
                  Raymondornelaslawfirm.org@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:7866992115" className="hover:text-gray-300 transition-colors">
                  (786) 699-2115
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>California</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Raymond Ornelas Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

