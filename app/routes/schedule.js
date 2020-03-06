import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
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
      },
      {
        title: "Guest TBA",
        date: "2020-05-28",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-06-25",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-07-23",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
