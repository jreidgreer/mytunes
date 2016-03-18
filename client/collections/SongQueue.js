// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
    this.on('add', function(e) {
      if (this.models.length === 1) {
        this.playFirst();
      }  
    }, this);
  },

  enqueue: function(song) {
    this.add(song);
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.remove(this.at(0));
    if (this.models.length >= 1) {
      this.playFirst();      
    } else {
      this.trigger('stop');
    }
  }

});