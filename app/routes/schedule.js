import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Houseshoes",
        date: "2020-12-10",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
