Template.messages.helpers({
  get_messages: function() {
    return Messages.find({}, { sort: {time: -1} });
  },
  some_fake_function: function() {
  }
});
