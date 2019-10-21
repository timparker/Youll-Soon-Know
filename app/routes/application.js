import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    play: function(show) {
      this.controllerFor("application").set("streamingShow", show);
    }
  }
});
