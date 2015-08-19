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
    Rooms.insert({event: '3bld', createdBy: username, privateRoom: false});
  },
  get_room_results: function(roomId) {
    //return Times.find({roomId: roomId});
    return Times.find({roomId: roomId}).fetch();
  }
});
