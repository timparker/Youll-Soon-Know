import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Guest Name",
        date: "2016-1-13 3pm"
      },
      {
        title: "Guest Name",
        date: "2016-1-27 3pm"
      },
    ]
  }
});
