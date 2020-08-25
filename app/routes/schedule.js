import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "MentPlus & DJ Scratch Nice",
        date: "2020-09-17",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-10-15",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-11-12",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Guest TBA",
        date: "2020-12-10",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
