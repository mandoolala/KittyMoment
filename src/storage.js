// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Create a child reference
var imagesRef = storageRef.child('images');
var videosRef = storageRef.child('videos');


var fileName = 'space.jpg';
var spaceRef = imagesRef.child(fileName);
var path = spaceRef.fullPath;
