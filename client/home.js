Template.home.helpers({
  some_list: [
    {type: "cat"}, {type:"dog"}, {type:"carrot"}
  ],
  list_users: function() {
    return Meteor.users.find();
  },
  list_online_users: function() {
    return Meteor.users.find({'status.online': true});
  }
});

Template.home.events({
  'click #to_main_room': function() {
    Router.go('/main_room');
  }
});
