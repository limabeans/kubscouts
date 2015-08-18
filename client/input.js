Template.input.events = {
  'submit form': function(event) {
    event.preventDefault();
    var name;
    if (Meteor.user()) {
      name = Meteor.user().emails[0].address;
    } else {
      name = 'anon';
    }
    
    if (message.value !== '') {
      Meteor.call("send_message", name, message.value);
      document.getElementById('message').value = '';
      message.value = ''; 
    }
  }
};
