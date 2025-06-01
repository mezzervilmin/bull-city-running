import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  links,
  richText,
  media,
  backgroundColor,
}) => {
  const bgClass =
    backgroundColor === 'blue'
      ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
      : ' bg-gradient-to-r from-red-500 to-orange-500'
  return (
    <div className={`hero ${bgClass} min-h-screen`}>
      <div className="hero-content flex-col lg:flex-row">
        {media && typeof media === 'object' && (
          <Media
            pictureClassName="w-fit"
            imgClassName="max-w-sm rounded-lg shadow-2xl"
            resource={media}
          />
        )}
        <div>
          <div className="py-6">
            {richText && <RichText className="mb-0" data={richText} enableGutter />}
          </div>
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" className="btn btn-primary" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
