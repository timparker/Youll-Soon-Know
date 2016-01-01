import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Guest Name",
        created: "2016-1-13 3pm",
      },
    ]
  }
});
