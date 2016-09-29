export default {
    playing: false,
    ready: false,
    audio: document.createElement('audio'),    
    setUrl: function(url) {       
        this.audio.src = url;
    },

    play: function() {
        this.audio.play();
        this.playing = true;
    },

    togglePlay: function() {
        if (this.playing === true) {
            this.stop();
        } else {
            this.play();
        }
    },

    stop: function() {
        this.audio.pause();
        this.playing = false;
    }
};