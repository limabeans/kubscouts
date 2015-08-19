Rooms = new Mongo.Collection('rooms');
Rooms.attachSchema( new SimpleSchema({
  event: {
    type: String
  },
  createdBy: {
    type: String
  }
}));



// I probably don't need these anymore
Messages = new Mongo.Collection('messages');
Kubscouts = new Mongo.Collection('kubscouts');
Kubscouts.attachSchema( new SimpleSchema({
  username: {
    type: String
  },
  age: {
    type: Number
  }
}));
