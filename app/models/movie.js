import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rating: DS.attr('number'),
  trailerLink: DS.attr('string')
});
