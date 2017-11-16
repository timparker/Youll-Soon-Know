import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Repeat Pattern & Stupid Kozo",
        date: "2017-12-13",
        start: "15:00",
        end: "17:00"
      }
    ];
  }
});
