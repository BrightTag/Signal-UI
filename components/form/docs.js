module.exports = {
  name:         'Form',
  state:        'Alpha',
  description:  null,
  examples: [
    {
      title: 'Basic Usage',
      config: {
        fields: [
          { label: 'First Name',  type: 'text' },
          { label: 'Last Name',   type: 'text'}
        ]
      }
    },
    {
      title: 'Textarea',
      config: {
        fields: [
          { label: 'Title',       type: 'text' },
          { label: 'Description', type: 'textarea'}
        ]
      }
    }
  ]
};
