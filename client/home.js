Template.home.helpers({
  some_list: [
    {type: "cat"}, {type:"dog"}, {type:"carrot"}
  ],
  list_users: function() {
    console.log(Meteor.users.find());
    console.log(Meteor.users.find().fetch());
    return Meteor.users.find();
  }
});
