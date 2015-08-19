Router.configure({
  layoutTemplate: 'master_layout',
  yieldTemplates: {
    nav: {to: 'nav'}
  }

});



// apparently yieldTemplates won't work unless I use Router.map
Router.map(function() {
  this.route('home', {
    path: '/',
    subscriptions: function() {
      return [Meteor.subscribe('rooms'), 
              Meteor.subscribe('messages'),
              Meteor.subscribe('users'),
              Meteor.subscribe('kubscouts')
             ];
    }
  });
});

Router.route('/rooms', function() {
  this.render('rooms');
});

Router.route('/main_room', function() {
  this.render('main_room');
});


AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
