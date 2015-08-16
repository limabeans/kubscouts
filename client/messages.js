Template.messages.helpers({
  get_messages: function() {
    return Messages.find({}, { sort: {time: -1} });
  }
});
