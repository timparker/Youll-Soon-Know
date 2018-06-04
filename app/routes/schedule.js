import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Title (Belgium)",
        date: "2018-06-27",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-07-25",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-08-22",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-09-19",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-10-17",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-11-14",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-12-12",
        start: "15:00",
        end: "17:00"
      }
    ];
  }
});
