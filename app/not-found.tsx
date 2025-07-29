export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🏥</div>
        <div className="text-xl text-red-600 mb-2">Template Not Found</div>
        <div className="text-gray-600 mb-4">
          The requested template could not be found or loaded.
        </div>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
} 