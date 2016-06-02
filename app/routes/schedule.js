import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Jon Phonics & Ed Scissortongue",
        date: "2016-06-15",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Yukka & Sonnyjim",
        date: "2016-06-29",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
