import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Sonnyjim",
        date: "2021-07-22",
        start: "15:00",
        end: "16:00"
      },
      {
        title: "Morriarchi",
        date: "2021-08-19",
        start: "15:00",
        end: "16:00"
      },
      {
        title: "TBD",
        date: "2021-09-16",
        start: "15:00",
        end: "16:00"
      },
      {
        title: "TBD",
        date: "2021-10-14",
        start: "15:00",
        end: "16:00"
      },
      {
        title: "TBD",
        date: "2021-11-11",
        start: "15:00",
        end: "16:00"
      },
      {
        title: "TBD",
        date: "2021-12-09",
        start: "15:00",
        end: "16:00"
      }
    ];
  }
});
