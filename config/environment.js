/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'youllsoonknow',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },


    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' connect.facebook.net maps.googleapis.com maps.gstatic.com d1l6p2sc9645hc.cloudfront.net",
      'font-src': "'self'",
      'connect-src': "'self' localhost:4000",
      'img-src': "'self' thumbnail.mixcloud.com",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.google.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com *.hosting.dev *.s3.amazonaws.com 'self'"
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
