import type { CollectionConfig } from 'payload'

export const Event: CollectionConfig = {
  slug: 'events',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date_of_event',
      type: 'date',
      label: 'Date of event',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'time_of_event',
      label: 'Time of event',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm',
        },
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'associated_pages',
      type: 'relationship',
      label: 'Page to display on',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
