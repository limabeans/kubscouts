Template.individualRoom.helpers({
  get_times: function() {
    return Times.find({roomId: this._id});
  }
});
