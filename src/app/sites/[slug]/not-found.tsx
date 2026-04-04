import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Site introuvable
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Le site que vous recherchez n&apos;existe pas ou n&apos;est plus
          disponible.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
