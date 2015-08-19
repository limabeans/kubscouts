
Template.home.helpers({
  some_list: [
    {type: "cat"}, {type:"dog"}, {type:"carrot"}
  ],
  list_users: function() {
    return Meteor.users.find();
  },
  list_online_users: function() {
    return Meteor.users.find({'status.online': true});
  },
  accounts_templates_get_state: function() {
    return AccountsTemplates.getState();
  },
  my_rooms: function() {
    return Rooms.find({createdBy: Meteor.user().username});
  }
});

Template.home.events({
  'click #to_main_room': function() {
    Router.go('/main_room');
  },
  'click #create-room': function() {
    Meteor.call('create_room', Meteor.user().username);
  },
  'click #list-rooms': function() {
    Router.go('room');
  }
});
