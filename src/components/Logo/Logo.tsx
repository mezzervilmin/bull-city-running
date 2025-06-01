import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Bull City Running Co. Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[48px]', className)}
      src="https://mvhctqvavykuqrxddjyp.supabase.co/storage/v1/object/sign/bcrc/media/bullcity_logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iM2M1Y2QyMy0xYTBmLTRlNzgtYjY0NS1hYWMyNGZmYzIzYzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiY3JjL21lZGlhL2J1bGxjaXR5X2xvZ28ucG5nIiwiaWF0IjoxNzQ4ODA2MjY4LCJleHAiOjQ5MDI0MDYyNjh9.9VfwhUnDdRAZShe67o0vYXwagXHMXrUvLrYi1vX3A0g"
    />
  )
}
