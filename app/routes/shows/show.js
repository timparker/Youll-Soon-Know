import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor("shows").find((s) => s.slug === params.slug);
  },
  
  setupController: function (controller, model) {
    this._super(controller, model);
    this.set("controller.show", model);
  }
});
