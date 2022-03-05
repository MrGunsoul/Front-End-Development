const song = {
  time:5,
  
  get duration() {
    return this.time;
  },

  set duration(newTime) {
    this.time =newTime;
  }, 


};



song.duration=3;

console.log(song.time)