import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "06-NRG",
        date: "2016-11-30",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Dagger DX",
        date: "2016-12-14",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
