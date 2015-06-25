export default function() {
  this.namespace = 'my-api.my-awesome-company.com';

  this.get('/movies', 'movies');

  this.post('/movies', function(db, request) {
    var attrs = JSON.parse(request.requestBody);
    var movie = db.movies.insert(attrs);
    return { movie: movie };
  });
}
