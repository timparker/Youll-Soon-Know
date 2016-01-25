import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor("shows").find((s) => s.permalink === params.permalink);
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    this.set("controller.show", model);
    window.scrollTo(0,0);
  }
});
