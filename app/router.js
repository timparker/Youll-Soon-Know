import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shows', { path: "/" }, function () {
    this.route('show', { path: "/:permalink" });
  });
  this.route('about', { path: "/about" });
  this.route('schedule', { path: "/schedule" });
});

export default Router;
