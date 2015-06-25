import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: i => `name ${i}`,
  rating: 5,
  trailer_link: i => `https://youtube.com/video/${i}`
});
