import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Photay & Jakoby",
        date: "2016-07-13",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-07-27",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
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
