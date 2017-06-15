import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
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
      }
    ];
  }
});
