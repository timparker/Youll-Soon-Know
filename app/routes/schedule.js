import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Guest TBA",
        date: "2020-11-12",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-12-10",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
