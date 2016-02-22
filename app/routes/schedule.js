import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Le Motel",
        date: "2016-02-24",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "The Range",
        date: "2016-03-09",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Dj MoCity",
        date: "2016-03-23",
        start: "15:00",
        end: "17:00"
      },
            {
        title: "Deft",
        date: "2016-04-06",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Streets of Beige",
        date: "2016-04-20",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Moxie",
        date: "2016-05-04",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
