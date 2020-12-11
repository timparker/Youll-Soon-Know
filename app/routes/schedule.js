import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "TBD",
        date: "2021-01-01",
        start: "15:00",
        end: "16:00"
      }
    ];
  }
});
