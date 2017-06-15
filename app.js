var apos = require('apostrophe')({
  shortName: 'manoa',
  title: 'manoa',

  bundles: [ 'apostrophe-events' ],
  modules: {
    'apostrophe-express': {
      session: {
        secret: 'SUPER-SECRET-THINGY-HERE'
      }
    },
    'apostrophe-events': {},
    'apostrophe-events-pages': {},
    'apostrophe-events-widgets': {},
    'hero-images-widgets': {},
  }
});
