'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-black mb-4">Something went wrong!</h2>
      <p className="text-slate-500 mb-8 text-center">
        We encountered an error while loading the project details.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-primary text-white rounded-xl font-bold"
        >
          Try again
        </button>
        <Link href="/" className="px-6 py-2 bg-slate-200 dark:bg-white/10 rounded-xl font-bold">
          Back to Home
        </Link>
      </div>
    </div>
  )
}