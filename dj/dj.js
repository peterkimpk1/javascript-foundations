function createSong(name, artist, favorite) {
  song = {
    name: name,
    artist: artist,
    favorite: false,
    hasBeenPlayed: false
  };
  if (favorite !== undefined) {
    song.favorite = favorite;
  }
  return song;
}

function playSong(song) {
  song['hasBeenPlayed'] = true;
  return song;
}

function makePlaylist(playlistName, songs) {
  playlist = {
    songs: [],
  };
  playlist.name = playlistName;
  for (i = 0; i < songs.length; i++) {
    playlist['songs'].push(songs[i]);
  }
  return playlist;
}

function addSongToPlaylist(playlist, song) {
  playlist['songs'].push(song);
  return playlist;
}

function playSongs(playlist, favoritesOnly) {
  for (i = 0; i < playlist['songs'].length; i++) {
    if (favoritesOnly === 'favorites only') {
      if (playlist['songs'][i]['favorite'] === true) {
        playlist['songs'][i]['hasBeenPlayed'] = true;
      }
    }
    if (favoritesOnly === undefined) {
      playlist['songs'][i]['hasBeenPlayed'] = true;
    }
  }
  return playlist;
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
