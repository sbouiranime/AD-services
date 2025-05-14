import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AD Services</h3>
            <p className="text-gray-300 mb-4">
              Votre spécialiste en ravalement de façade, peinture et isolation thermique depuis 2023.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Ravalement de façade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Peinture intérieure/extérieure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Isolation thermique
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Nettoyage de toiture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <div className="flex items-start mb-2">
              <Clock className="w-5 h-5 mr-2 mt-0.5 text-gray-400" />
              <div>
                <p className="text-gray-300">Lundi - Vendredi: 8h - 18h</p>
                <p className="text-gray-300">Samedi: 9h - 15h</p>
                <p className="text-gray-300">Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-300">06 79 74 71 66</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-300">adsravalement@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-400" />
                <span className="text-gray-300">
                  02 rue Alfred Musset
                  <br />
                  Limeil Brévannes  94450
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 AD Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
