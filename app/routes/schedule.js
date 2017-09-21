import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Om Unit",
        date: "2017-10-18",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-11-15",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Repeat Pattern + TBA",
        date: "2017-12-13",
        start: "15:00",
        end: "17:00"
      }
    ];
  }
});
