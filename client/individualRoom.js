Template.individualRoom.helpers({
  get_times: function() {
    return Times.find({roomId: this._id});
  }
});

Template.individualRoom.events({
  'click #pretend-solve': function() {
    var username = Meteor.user().username;
    var roomId = this._id;
    var solveTime = Math.floor((Math.random()*1000)+1);
    Times.insert({
      username: username,
      roomId: roomId,
      solveTime: solveTime
    });
  }
});
