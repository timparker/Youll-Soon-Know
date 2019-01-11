import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
    {
      title: "Josip Klobučar",
      date: "2019-02-07",
      start: "14:00",
      end: "16:00"
    },
    {
      title: "TBA",
      date: "2019-03-07",
      start: "14:00",
      end: "16:00"
    },
    {
      title: "TBA",
      date: "2019-04-04",
      start: "14:00",
      end: "16:00"
    }
    ];
  }
});
