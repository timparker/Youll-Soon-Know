import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Etch",
        date: "2016-12-28",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Morriarchi",
        date: "2016-01-11",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Photay",
        date: "2016-01-25",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
