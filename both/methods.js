Meteor.methods({
  addYolo: function() {
    Rooms.insert({name: "yoloooooo"});
  },
  send_message: function(name, msg) {
    Messages.insert({
      name: name,
      message: msg,
      time: Date.now() 
    });
  },
  create_room: function(username) {
    Rooms.insert({createdBy: username, privateRoom: false});
  },
  get_room_results: function(roomId) {
    return Times.find({roomId: roomId});
  }
});
