import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Crssspace",
        date: "2018-07-25",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Cunfa, Russ Ryan & Stephen Valentini",
        date: "2018-08-22",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Tokyo Special",
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
