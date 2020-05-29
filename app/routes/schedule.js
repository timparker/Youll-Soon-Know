import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Dolenz",
        date: "2020-06-25",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-07-23",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-08-20",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-09-17",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-10-15",
        start: "14:00",
        end: "16:00"
      },
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
