import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Lordel & Vorace",
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
      {
        title: "TBA",
        date: "2017-08-09",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
