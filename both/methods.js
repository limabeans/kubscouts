Meteor.methods({
  addYolo: function() {
    Rooms.insert({name: "yolo"});
  },
  send_message: function(name, msg) {
    Messages.insert({
      name: name,
      message: msg,
      time: Date.now() 
    });
  }
});
