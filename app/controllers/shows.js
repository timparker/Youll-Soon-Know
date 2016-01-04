import Ember from 'ember';

export default Ember.Controller.extend({

  latestShows: function () {
    return this.get("model").slice(0, 2);
  }.property("model"),

  byYears: function () {
    // turn into a {} like
    // { 2015: [], 2014: [{}, {}, {}] }
    return this.get("model").reduce((prev, curr) => {
      let year = curr.created.split("-")[0];

      if (prev[year] === undefined) {
        prev[year] = [curr];
      } else {
        prev[year].push(curr);
      }

      return prev;
    }, {});
  }.property("model")
  
});
