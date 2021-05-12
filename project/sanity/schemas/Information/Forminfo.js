export default {
    name: 'Form',
    title: 'Form',
    type: 'document',
    fields: [
      {
        name: 'FormName',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'FormEmail',
        title: 'Email',
        type: 'string',
        options: {
        maxLength: 96,
        },
      },
      {
        name: 'FormNumber',
        title: 'Number',
        type: 'string',
      },
      {
        name: 'FormTip',
        title: 'Tip',
        type: 'string',
      },
      
    ],
    preview: {
      select: {
        title: 'Form', 
      },
    },
  }
  