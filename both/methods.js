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
  }
});
