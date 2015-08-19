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
    Rooms.insert({event: '3bld', createdBy: username});
  }
});
