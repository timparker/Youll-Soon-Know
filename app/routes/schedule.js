import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Repeat Pattern & Stupid Kozo",
        date: "2017-12-13",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-01-10",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-02-07",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-03-07",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2018-04-04",
        start: "15:00",
        end: "17:00"
      }
    ];
  }
});
