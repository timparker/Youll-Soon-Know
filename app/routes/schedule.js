import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Guest TBA",
        date: "2016-1-13",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Guest TBA",
        date: "2016-1-27",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
