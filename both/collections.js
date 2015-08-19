Rooms = new Mongo.Collection('rooms');
Rooms.attachSchema( new SimpleSchema({
  event: {
    type: String
  },
  createdBy: {
    type: String
  },
  privateRoom: {
    type: Boolean
  }
}));

Times = new Mongo.Collection('times');
Times.attachSchema( new SimpleSchema({
  username: {
    type: String
  },
  roomId: {
    type: String
  },
  time: {
    type: Number
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
