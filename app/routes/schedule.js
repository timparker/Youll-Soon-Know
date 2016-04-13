import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Streets of Beige",
        date: "2016-04-20",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Know V.A",
        date: "2016-05-04",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Moxie",
        date: "2016-05-18",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Richie Brains",
        date: "2016-06-01",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
