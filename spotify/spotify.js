function createCollection(name, description) {
  collection = {
    name: 'unknown',
    description: 'unknown',
    tracks: [],
  };
  collection.name = name;
  collection.description = description;
  return collection;
}

function createTrack(title, artist, duration) {
  track = {
    title: 'unknown',
    artist: 'unknown',
    duration: 0,
  }
  if (title !== undefined && duration !== undefined && artist !== undefined) {
    track.title = title;
    track.artist = artist;
    track.duration = duration;
  }
  return track;
}

function reviewTrack(track) {
  if (track['artist'] === 'Red Hot Chili Peppers') {
    return `The song ${track['title']} rules!`
  }
  return `I wish this was a Red Hot Chili Peppers song.`
}

function addTrack(collection, track) {
  collection['tracks'].push(track);
  return collection;
}

function getTotalDuration(collection) {
  trackDuration = 0;
  for (i = 0; i < collection['tracks'].length; i++) {
    trackDuration += collection['tracks'][i]['duration']
  }
  return trackDuration;
}

function findTracksByArtist(collection, artistName) {
  tracksByArtist = [];
  for (i = 0; i < collection['tracks'].length; i++) {
    if (collection['tracks'][i]['artist'] === artistName) {
      tracksByArtist.push(collection['tracks'][i])
    }
  }
  return tracksByArtist;
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
   }