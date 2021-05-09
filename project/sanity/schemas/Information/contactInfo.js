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
      name: 'href',
      title: 'Link',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
  ],
}