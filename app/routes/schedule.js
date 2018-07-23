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
        date: "2018-08-23",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Tokyo Special",
        date: "2018-09-20",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
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
