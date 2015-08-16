Meteor.methods({
  addYolo: function() {
    Rooms.insert({name: "yolo"});
  }
});
