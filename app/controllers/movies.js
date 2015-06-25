import Ember from 'ember';

export default Ember.Controller.extend({
  movie: {},

  actions: {
    saveMovie: function() {
      var newMovie = this.get('store').createRecord(this.get('movie'));
      newMovie.save();
    }
  }
});
