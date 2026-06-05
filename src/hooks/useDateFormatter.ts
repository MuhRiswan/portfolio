"use client"

import { useState, useEffect } from "react"
import { formatDate } from "@/lib/date"

export function useDateFormatter(initialDate: Date | string | null) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return {
      standard: "-",
      full: "-",
      relative: "-",
      custom: () => "-",
    }
  }

  return {
    standard: formatDate.standard(initialDate),
    full: formatDate.full(initialDate),
    relative: formatDate.relative(initialDate),
    custom: (template: string) => formatDate.custom(initialDate, template),
  }
}
