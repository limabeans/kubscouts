Template.input.events = {
  'submit form': function(event) {
    event.preventDefault();
    if (Meteor.user()) {
      var name = Meteor.user().emails[0].address;
      console.log(name);
    } else {
      var name = 'anon';
    }
    
    if (message.value !== '') {
      Meteor.call("send_message", name, message.value);
      document.getElementById('message').value = '';
      message.value = ''; 
    }
  }
}
