import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlocks as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import { CMSLink } from '@/components/Link'

type BlockProps = MediaBlockProps['blocks'][0] & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

const Block: React.FC<BlockProps> = (props) => {
  const { imgClassName, media, staticImage, title, link, textOnHover } = props

  return (
    <div className="lg:grow-0 lg:shrink-0 lg:basis-[30%]">
      <CMSLink {...link} label="" className="group relative block bg-black">
        {(media || staticImage) && (
          <Media
            imgClassName={cn(
              'absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50',
              imgClassName,
            )}
            resource={media}
            src={staticImage}
          />
        )}

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            <RichText data={title} />
          </div>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="text-sm text-white">
                {textOnHover && <RichText data={textOnHover} enableGutter={false} />}
              </div>
            </div>
          </div>
        </div>
      </CMSLink>
    </div>
  )
}

export const MediaBlock: React.FC<MediaBlockProps> = (props) => {
  return (
    <div className="container">
      <div className="flex flex-wrap gap-8 justify-center">
        {props.blocks?.map((block) => {
          return <Block key={block.id} {...block} enableGutter={false} />
        })}
      </div>
    </div>
  )
}
