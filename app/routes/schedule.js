import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Fixate & Morriarchi",
        date: "2016-06-01",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Jon Phonics & Ed Scissortongue",
        date: "2016-06-15",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Yukka & More TBA",
        date: "2016-06-29",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
