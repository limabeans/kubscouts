Template.room.helpers({
  list_public_rooms: function() {
    return Rooms.find({privateRoom: false});
  }
});
