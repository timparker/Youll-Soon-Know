import Ember from 'ember';

export default Ember.Controller.extend({

  latestSchedule: function () {
    return this.get("model").slice(0, 10);
  }.property("model"),

});
