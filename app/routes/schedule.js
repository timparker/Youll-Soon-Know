import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Martelo",
        date: "2016-08-24",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Al Nather",
        date: "2016-09-07",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Live from Japan",
        date: "2016-09-21",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
