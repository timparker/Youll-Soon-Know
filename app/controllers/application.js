import Ember from 'ember';

export default Ember.Controller.extend({
  streamingShow: null,

  duotone: function() {
    Ember.run.schedule('afterRender', this, function() {
      Ember.$('img').duotone({
        gradientMap: '#303954 , #f0f0f0'
      });
    });
  }.observes('currentPath')
});
