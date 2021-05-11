export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'authorName',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'authorSlug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'authorRolle',
      title: 'Rolle',
      type: 'string',
    },
    {
      name: 'authorImageAlt',
      title: 'Main image alternative text',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'authorTextBio',
      title: 'Text Bio',
      type: 'text',
    },
    {
      name: 'authorBio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'authorName',
      media: 'authorImage',
    },
  },
}
