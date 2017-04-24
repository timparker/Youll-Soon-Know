import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "BSN Posse & Russ Ryan",
        date: "2017-05-03",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Lordel",
        date: "2017-05-17",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Oceantied",
        date: "2017-05-31",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-06-14",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-06-28",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-07-12",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-07-26",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
