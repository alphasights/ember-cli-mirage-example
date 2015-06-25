import resolver from './helpers/resolver';
import startApp from './helpers/start-app';
import Ember from 'ember';
import { setResolver } from 'ember-qunit';

setResolver(resolver);

export default {
  beforeEach: function() {
    this.app = startApp();
  },

  afterEach: function() {
    Ember.run(this.app, this.app.destroy);
  }
};
