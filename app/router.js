import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shows', { path: "/" });
  this.route('about', { path: "/about" });
  this.route('schedule', { path: "/schedule" });
  this.route('show', { path: "/:show" });
  // add date before show name for permalink
  this.route('iframe', { path: "/iframe" });
});

export default Router;
