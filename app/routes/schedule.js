import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Yukka & Sonnyjim",
        date: "2016-06-29",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Photay",
        date: "2016-07-13",
        start: "15:00",
        end: "17:00"
      }
    ]
  }
});
