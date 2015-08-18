Template.home.helpers({
  some_list: [
    {type: "cat"}, {type:"dog"}, {type:"carrot"}
  ],
  list_users: function() {
    var users = Meteor.users.find().fetch();
    // extract out the emails
    users = users.map(function(user) {return user.emails[0].address;});
    return users;
  },
  list_online_users: function() {
    var users = Meteor.users.find({'status.online': true});
    // extract out the emails
    users = users.map(function(user) {return user.emails[0].address;});
    return users;

  }
});
