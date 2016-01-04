import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      { 
        title: "Raminski",
        slug: "raminski",
        created: "2015-12-16",
        play: "/youllsoonknow/nts-16122015-w-special-raminski",
        image: "https://thumbnail.mixcloud.com/w/300/h/300/q/85/upload/images/extaudio/db2985cd-84fc-4b33-be81-fd5a00b646cb.png" 
      },
      {
        title: "Fracture",
        slug: "fracture",
        created: "2015-12-02",
        play: "/youllsoonknow/nts-2122015-w-special-guest-fracture",
        image: "https://thumbnail.mixcloud.com/w/300/h/300/q/85/upload/images/extaudio/aa5647ee-a187-4858-9c95-516cc2c56f1d.png"
      }
    ]
  }
});
