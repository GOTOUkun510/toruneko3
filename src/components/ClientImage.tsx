'use client'

import { ImgHTMLAttributes } from 'react'

interface ClientImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  // 必要であれば追加のProps
}

export default function ClientImage({ onError, alt = '', ...props }: ClientImageProps) {
  return (
    <img
      alt={alt}
      {...props}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none'
        if (onError) onError(e)
      }}
    />
  )
}
