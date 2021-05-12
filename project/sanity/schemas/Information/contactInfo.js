export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    {
      name: 'contactInfoBio',
      title: 'Contact Info',
      type: 'string',
      description: 'For example: *****@gmail.com or /game_UIN',
    },
    {
      name: 'contactInfoIcon',
      title: 'Icon for contact media',
      type: 'image',
      //Hotspot option, yes? no?
    },
    {
      name: 'iconAlt',
      title: 'icon alternative text',
      type: 'string',
    },
    {
      name: 'imageId',
      title: 'Id for image',
      type: 'number'
    },
    {
      name: 'href',
      title: 'Link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
  ],
  orderings: [
    {
      title: 'Id for image',
      name: 'imageIdDesc',
      by: [
        {field: 'imageId', direction: 'desc'}
      ]
    }
  ]
}