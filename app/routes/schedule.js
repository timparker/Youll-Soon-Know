import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "TBA",
        date: "2016-11-30",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-12-14",
        start: "15:00",
        end: "17:00"
      }
    ]
  }
});
