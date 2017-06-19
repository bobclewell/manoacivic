var apos = require('apostrophe')({
  shortName: 'manoa',
  title: 'manoa',

  bundles: [
    'apostrophe-events',
    'apostrophe-blog'
  ],
  modules: {
    'apostrophe-express': {
      session: {
        secret: 'SUPER-SECRET-THINGY-HERE'
      }
    },
    'apostrophe-events': {},
    'apostrophe-events-pages': {},
    'apostrophe-events-widgets': {},
    'apostrophe-blog': {},
    'apostrophe-blog-pages': {},
    'apostrophe-blog-widgets': {},
    'hero-images-widgets': {},
    'contact-form': {},
    'contact-form-widgets': {},
  }
});
