// sets the default layout to master_layout
// then injects the content into {{> yield}}
Router.configure({
  layoutTemplate: 'master_layout',
  yieldTemplates: {
    nav: {to: 'nav'}
  }
});

// apparently yieldTemplates won't work unless I use Router.map
Router.map(function() {
  this.route('home', { // the 'home' template
    path: '/', // the actual url
    subscriptions: function() {
      return [Meteor.subscribe('rooms'), 
              Meteor.subscribe('messages'),
              Meteor.subscribe('users'),
              Meteor.subscribe('kubscouts')
             ];
    }
  });
});

Router.map(function() {
  this.route('room', {
    path: '/room',
    subscriptions: function() {
      return [Meteor.subscribe('rooms')
             ];
    }
  });
});


Router.map(function() {
  this.route('individualRoom', {
    path: '/room/:_id',
    subscriptions: function() {
      return [Meteor.subscribe('rooms')
             ];
    },
    data: function() {
      var room = Rooms.findOne({_id: this.params._id});
      return room;
    }
  });
});


// sample data route w/ master_layout
Router.map(function() {
  this.route('username', {
    path: '/user/:_username',
    data: function() {
      return {username: this.params._username};
    }
  });
});



// these routes won't work with master_layout
Router.route('/rooms', function() {
  this.render('rooms');
});

Router.route('/main_room', function() {
  this.render('main_room');
});



// make sure login/logout/etc routes are configured
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
