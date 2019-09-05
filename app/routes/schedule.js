import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Submerse, Fitz Ambro$e & Repeat Pattern",
        date: "2019-09-19",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "Sumgii",
        date: "2019-10-17",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
        date: "2019-11-14",
        start: "14:00",
        end: "16:00"
      },
      {
        title: "TBA",
        date: "2019-12-12",
        start: "14:00",
        end: "16:00"
      }
    ];
  }
});
