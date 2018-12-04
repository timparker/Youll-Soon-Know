import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Ally Mobbs",
        date: "2018-12-13",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
