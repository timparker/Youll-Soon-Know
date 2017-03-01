import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Gurney Champion",
        date: "2017-03-08",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-03-22",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2017-04-05",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Kromestar & Elias Zaidan",
        date: "2017-04-19",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
