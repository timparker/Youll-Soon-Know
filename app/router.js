import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shows', { path: "/" });
  this.route('about', { path: "/about" });
  this.route('show', { path: "/:show" });
  this.route('iframe', { path: "/iframe" });
});

export default Router;
