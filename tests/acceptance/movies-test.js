import Ember from 'ember';
import { module, test } from 'qunit';
import testHelper from '../test-helper';

module('Acceptance: Movies', {
  beforeEach: function() {
    testHelper.beforeEach.apply(this, arguments);
  },

  afterEach: function() {
    testHelper.afterEach.apply(this, arguments);
  }
});

test('correct path and user loaded', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'movies');
  });
});

test('created movies are shown on the page', function(assert) {
  visit('/');

  andThen(function() {
    fillIn(find('input.name'), 'Jurassic World');
    fillIn(find('input.rating'), '10');
    fillIn(find('input.trailer'), 'https://www.youtube.com/watch?v=RFinNxS5KN4');

    click('button.form-submit');

    andThen(function() {
      assert.equal(find(".movies-list .movie").length, 1);
    });
  });
});

test('movies are shown on the page', function(assert) {
  andThen(function() {
    var movie = server.create('movie');

    visit('/');

    andThen(function() {
      assert.equal(find(".movies-list .movie span.title").html(), `Name: ${movie.name}`);
    });
  });
});
