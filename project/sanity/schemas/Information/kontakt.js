export default {
    name: 'kontakt',
    title: 'Kontakt',
    type: 'document',
    fields: [
      {
        name: 'navn',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        options: {
        maxLength: 96,
        },
      },
      {
        name: 'nummer',
        title: 'Nummer',
        type: 'string',
      },
      {
        name: 'tips',
        title: 'Tips',
        type: 'string',
      },
      
    ],
    preview: {
      select: {
        title: 'Form', 
      },
    },
  }
  