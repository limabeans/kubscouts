Template.individualRoom.helpers({
  get_user_results: function() {
    var times = Times.find({roomId: this._id});
    console.log(this._id);
    return [{username: 'angel', time: 2323}];
  }
});
