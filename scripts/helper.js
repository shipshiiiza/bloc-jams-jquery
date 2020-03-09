class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const duration = player.getDuration()
    $('#time-control .total-time').text(player.prettyTime(song.duration));

  };

}
const helper = new Helper();
