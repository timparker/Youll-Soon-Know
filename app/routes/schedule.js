import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "IAMNOBODI",
        date: "2019-11-14",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
        date: "2019-12-12",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
