import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Morriarchi",
        date: "2017-01-11",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Photay",
        date: "2017-01-25",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-02-08",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Jake Jenkins",
        date: "2017-02-22",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Gurney Champion",
        date: "2017-03-08",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-03-22",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
