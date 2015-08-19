if (Meteor.isServer) {
  Meteor.publish('rooms', function() {
    return Rooms.find({});
  });
  Meteor.publish('messages', function() {
    return Messages.find({});
  });
  Meteor.publish('users', function() {
    return Meteor.users.find();
  });
  Meteor.publish('kubscouts', function() {
    return Kubscouts.find({});
  });
  Meteor.publish('times', function() {
    return Times.find({});
  });

  Times.allow({
    insert: function(userId, user) {
      return true;
    }
  });

}
