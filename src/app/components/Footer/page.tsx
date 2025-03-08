'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-fourt text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <Link href="https://www.instagram.com/bini._.nha?igsh=bTkwbzMyMWYybTRq&utm_source=qr" target="_blank" className="text-white hover:text-gray-300">
            Instagram
          </Link>
          <Link href="https://www.behance.net/sabrinapereira35" target="_blank" className="text-white hover:text-gray-300">
            Behance
          </Link>
          <Link href="https://wa.me/554498472027" target="_blank" className="text-white hover:text-gray-300">
            WhatsApp
          </Link>
        </div>
        <p className="mt-4 text-sm">© 2025 Sabrina Lísia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
