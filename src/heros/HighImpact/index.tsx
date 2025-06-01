'use client'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    media &&
    typeof media === 'object' && (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${media.url})`,
        }}
      >
        <div className="container mb-8 z-10 relative flex items-center justify-center">
          <div className="hero-content text-white text-center">
            <div className="lg:max-w-42">
              {richText && (
                <RichText className="mb-6 text-white" data={richText} enableGutter={false} />
              )}
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex md:justify-center gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  )
}
