import type { Block, Field } from 'payload'
import { link } from '@/fields/link'

export const MediaBlock: Field[] = [
  {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'title',
    type: 'richText',
    required: true,
  },
  {
    name: 'textOnHover',
    type: 'richText',
    required: true,
  },
  link({
    appearances: false,
  }),
]

export const MediaBlocks: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlocks',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      required: true,
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
      fields: MediaBlock,
    },
  ],
}
