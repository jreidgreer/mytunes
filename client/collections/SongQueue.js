// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
    this.on('add', function(e) {
      console.log('TEST1');
      if (this.models.length === 1) {      
        console.log('TEST2');
        this.playFirst();
      }  
    }, this);
  },

  enqueue: function(song) {
    console.log('TEST3 - PLEASE WORK!');
    this.add(song);
    // if (this.models.length === 1) {      
    //   this.playFirst();
    // }
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playFirst: function() {
    console.log('playFirst is triggered');
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