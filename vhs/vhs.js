function createTape(name, readyToPlay) {
    tape = {
        title: "",
        readyToPlay: false,
    };
    if (name !== undefined) {
        tape.title = name;
    }
    if (readyToPlay !== undefined) {
        tape.readyToPlay = readyToPlay;
    }
    return tape;
}

function reset(track) {
    if (track['readyToPlay'] !== true) {
        track.readyToPlay = true;
    }
    return track;
}

function createCollection(tape1, tape2, tape3) {
    collection = [];
    if (tape1 !== undefined && tape2 !== undefined && tape3 !== undefined) {
        collection.push(tape1);
        collection.push(tape2);
        collection.push(tape3);
        return collection;
    }
    return `Your collection is empty.`;
}

function previewCollection(collection) { //parameter is an array with nested objects
    preview = [];
    for (i = 0; i < collection.length; i++) {
        preview.push(collection[i]['title'])
    }
    return preview;
}
module.exports = { 
    createTape,
    reset,
    createCollection,
    previewCollection
 }