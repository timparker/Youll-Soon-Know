import Ember from 'ember';
/* global Mixcloud */

export default Ember.Component.extend({
  classNames: "mixcloud-player",
  classNameBindings: ["isPlaying", "hasSong"],
  
  url: null,
  hasSetup: false,
  isPlaying: true,
  hasSong: Ember.computed.notEmpty("show"),
  
  setup: function () {
    let iframe = document.getElementById("mixcloud-iframe");
    iframe.onload = function () {
      let widget = Mixcloud.PlayerWidget(iframe);
      this.set("widget", widget);
      
      widget.ready.then(() => {
        this.set("hasSetup", true);
        widget.events.buffering.on(() => this.onBuffering());
        widget.events.play.on(() => this.onPlay());
        widget.events.pause.on(() => this.onPause());
        widget.events.progress.on((ev) => this.onProgress(ev));
        widget.events.ended.on((ev) => this.onEnded());
      })    

    }.bind(this);
  }.on("didInsertElement"),
  
  changeSong: function () {
    console.log(this.get("show"));
    if (this.get("hasSetup") && this.get("show")) {
      let widget = this.get("widget");
      this.set("isPlaying", true);
      widget.load(this.get("show.play"), this.get("isPlaying"))
    }
  }.observes("hasSetup", "show", "show.url"),
  
  onBuffering: function () {
    this.set("buffering", true);
  },
  
  onPlay: function () {
    this.set("buffering", false);
    this.set("isPlaying", true);
  },
  
  onPause: function () {
    this.set("isPlaying", false);
  },
  
  onProgress: function (ev) {
    console.log(ev);
  },
  
  onEnded: function () {
    this.set("song", null);
  },
  
  actions: {
    play: function () {
      this.get("widget").play();
    },
    pause: function () {
      this.get("widget").pause();
    }
  }
});
