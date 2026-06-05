"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  src?: string | null
  name?: string | null
  size?: number
  className?: string
}

export default function UserAvatar({ src, name, size = 32, className }: UserAvatarProps) {
  const initial = name ? name.charAt(0).toUpperCase() : "A"

  const sizeClass = `w-${size / 4} h-${size / 4}`

  return (
    <div className={cn("relative rounded-full border border-[#222f49] overflow-hidden shrink-0 flex items-center justify-center select-none", sizeClass, className)}>
      {src ? (
        <Image src={src} alt={name || "User profile"} width={size} height={size} className="rounded-full object-cover" />
      ) : (
        <div className={cn("w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2563eb] to-[#7c3aed]", sizeClass)}>
          <span className="text-white font-bold tracking-tighter" style={{ fontSize: `${size / 2.2}px` }}>
            {initial}
          </span>
        </div>
      )}
    </div>
  )
}
