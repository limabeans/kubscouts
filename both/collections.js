Rooms = new Mongo.Collection('rooms');
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
