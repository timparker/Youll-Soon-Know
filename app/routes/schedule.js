import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "DJ MoCity",
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
        title: "Know V.A",
        date: "2016-05-04",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-05-18",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
