import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
    {
      title: "Deft",
      date: "2019-04-04",
      start: "14:00",
      end: "16:00"
    },
    {
      title: "TBA",
      date: "2019-05-02",
      start: "14:00",
      end: "16:00"
    },
    {
      title: "TBA",
      date: "2019-05-30",
      start: "14:00",
      end: "16:00"
    }
    ];
  }
});
