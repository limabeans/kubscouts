Template.rooms.helpers({
  get_rooms: function() {
    return Rooms.find({});
  }
});

Template.rooms.events({
  "click #yolo": function() {
    Meteor.call("addYolo");
  }
});
