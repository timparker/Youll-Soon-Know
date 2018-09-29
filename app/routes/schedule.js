import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "20/20",
        date: "2018-10-18",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
        date: "2018-11-15",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
        date: "2018-12-13",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
