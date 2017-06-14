import Ember from 'ember';

export default Ember.Controller.extend({

  latestShows: function () {
    return this.get("model").slice(0, 2);
  }.property("model"),

  byYears: function () {
    // turn into a {} like
    // [
    //  { year: 2015, shows: [] },
    //  { year: 2014, shows: [{}, {}, {}] },
    // ]
    return this.get("model").reduce((prev, curr) => {
      let year = curr.created.split("-")[0];
      let array = prev.find(k => k.year === year);

      if (array) {
        array.shows.push(curr);
      } else {
        prev.push({ year: year, shows: [curr] });
      }

      return prev;
    }, []);
  }.property("model")

});
