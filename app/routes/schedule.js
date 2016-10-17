import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "COMBAT!",
        date: "2016-10-19",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Letherette [Channel 2 for one week only]",
        date: "2016-11-02",
        start: "12:00",
        end: "14:00"
      },
      {
        title: "TBA",
        date: "2016-11-16",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-11-30",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
