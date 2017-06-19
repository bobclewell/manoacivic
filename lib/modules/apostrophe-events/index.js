  module.exports = {
    addFields: [
      {
        type: 'string',
        name: 'description',
        label: 'Description',
        textarea: true,
        required: true
      },
      {
        type: 'string',
        name: 'contactPerson',
        label: 'Contact Person'
      },
      {
        type: 'string',
        name: 'contactEmail',
        label: 'Contact Email'
      },
      {
        type: 'string',
        name: 'contactPhone',
        label: 'Contact Phone'
      },
      {
        name: 'image',
        label: 'Image',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          size: 'one-sixth'
          limit: 1
        }
      },
    ],
    arrangeFields: [
      {
        name: 'basic',
        label: 'Basics',
        fields: ['title', 'description', 'startDate', 'allDay', 'startTime', 'endTime', 'image']
      },
      {
        name: 'advanced',
        label: 'Advanced',
        fields: ['dateType', 'endDate', 'repeatInterval', 'repeatCount']
      },
      {
        name: 'contactInfo',
        label: 'Contact Info (Optional)',
        fields: ['contactPerson', 'contactEmail', 'contactPhone']
      },
      {
        name: 'admin',
        label: 'Administrative',
        fields: ['slug', 'published', 'tags']
      },
    ]
  };
