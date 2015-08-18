Template.signup.events({
  'submit form': function() {
    event.preventDefault();
    var first_name = $('[name=first-name]').val();
    var last_name = $('[name=last-name]').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var username = $('[name=username]').val();
    Accounts.createUser({
      email: email,
      password: password,
      profile: { 
        first_name: first_name,
        last_name: last_name,
        username: username 
      }
    });
  }
});


