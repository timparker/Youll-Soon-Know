import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Dolenz & Crem'e",
        date: "2016-08-10",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-08-24",
        start: "15:00",
        end: "17:00"
      }
    ]
  }
});
