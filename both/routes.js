Router.route('/', {
  subscriptions: function() {
    return [Meteor.subscribe('rooms'), 
            Meteor.subscribe('messages'),
            Meteor.subscribe('users'),
            Meteor.subscribe('kubscouts')
           ];
  },
  action: function() {
    this.render('home');
  }
});


Router.route('/rooms', function() {
  this.render('rooms');
});

Router.route('/main_room', function() {
  this.render('main_room');
});
