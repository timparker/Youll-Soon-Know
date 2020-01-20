import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Sonnyjim",
        date: "2020-02-06",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Deft",
        date: "2020-03-05",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-04-02",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-04-30",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
