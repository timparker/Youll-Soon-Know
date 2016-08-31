import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        title: "Al Nather & Itoa",
        date: "2016-09-07",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "Live from Japan",
        date: "2016-09-21",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-10-05",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA",
        date: "2016-10-19",
        start: "15:00",
        end: "17:00"
      },
      {
        title: "TBA [On NTS INT]",
        date: "2016-11-02",
        start: "12:00",
        end: "14:00"
      },
    ]
  }
});
