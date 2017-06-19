  module.exports = {
    addFields: [
      {
        name: 'article',
        label: 'Article Content',
        type: 'area',
        options: {
          widgets: {
            'apostrophe-rich-text': {
              controls: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
            },
            'apostrophe-images': {
              options: {
                aspectRatio: [ 4, 3 ],
                minSize: [ 400, 300 ],
                limit: 1
              },
            }
          }
        }
      }
    ],
    arrangeFields: [
      {
        name: 'basic',
        label: 'Basics',
        fields: ['title', 'article', 'slug']
      },
    ]
  };