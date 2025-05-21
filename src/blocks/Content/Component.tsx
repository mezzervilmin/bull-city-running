import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { content } = props

  return (
    <div className="container my-16">
      <div className="">{content && <RichText data={content} enableGutter={false} />}</div>
    </div>
  )
}
