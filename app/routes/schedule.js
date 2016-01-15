import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Guest Joe Shakespeare",
        date: "2016-1-27",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Guest TBA",
        date: "2016-2-10",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Guest TBA",
        date: "2016-3-9",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Guest TBA",
        date: "2016-3-23",
        start: "15:00",
        end: "17:00"
      },
    ]
  }
});
