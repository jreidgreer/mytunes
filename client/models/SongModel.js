// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.attributes.plays++;
    this.trigger('play', this);
    console.log(this.attributes.plays);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
    // this.collection.remove(this);
  },

  ended: function() {
    // this.dequeue();
    this.trigger('ended', this);
  }
});
