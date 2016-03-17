// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(e) {
      console.log('Song Added');
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    var firstSong = this.at(0);
    console.log('Playing Song: ', firstSong);
    firstSong.play();
  },

  playNext: function() {
    //remove first song - LIFO
    console.log('playNext function');
    this.remove(this.at(0));

    if (this.models.length !== 0) {
      this.playFirst();      
    }
  }

});