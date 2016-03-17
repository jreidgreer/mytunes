// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(e) {
      console.log('Song Added');
    });
  },

  playFirst: function() {
    var firstSong = _.first(this.models);

    firstSong.play();
  },

  playNext: function() {
    //remove first song - LIFO
    this.remove(this.models[0]);

    this.playFirst();
  }

});