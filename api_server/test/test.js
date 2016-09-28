

var request = require('supertest');
var app = require('../server.js');

///  Root of API 
describe('Testing  - GET /', function() {
  it('Should be status code 404', function(done) {
    request(app).get('/').expect(404,done)
  });
  // it('Should have proper content (Russell Perkins & a footer)', function(done) {
  //       request(app).get('/')
  //               .expect(/Russell Perkins/)
  //               .expect(/class="footer"/,done);
  // });
});

/// Movie Model  GET  REQUESTS
  var movie_url = "/movie";
  describe('Testing  - GET '+movie_url, function() {
    it('Should be status code 200', function(done) {
      request(app).get(movie_url)
                  .expect(200,done);
    });

    //// Returns JSON
    it('Should be returning JSON', function(done) {
          request(app).get(movie_url)
                  .expect('Content-Type', /json/, done);
    });
  });

/// Movie Model - POST request
  var movie_url = "/movie";
  var testMovie = {
    title: "Testing Movie Title",
    url  : "http://www.deified.us"
  };
  // var newMovie
  var newCreatedID = null; 
  describe('Testing  - POST '+movie_url, function() {
      /// Create new Entry..  
        it('Adding New Movie Document', function(done) {
          request(app).post(movie_url)
                      .send(testMovie)
                      .expect( "Content-Type", /json/)
                      .end(function(err, res){
                          // console.log( Object.keys(res) );
                          newCreatedID = ( res.body._id );
                          if (err) return done(err);
                          done();  
                      });
        });

        // after(function(){
        //     console.log("\tCreated Document :"+newCreatedID);
        // });

      ////  Delete Test
        it('Deleting Newly Movie Document', function(done) {
          request(app).delete(movie_url+"/"+newCreatedID)
                      .end(function(err, res){
                          if (err) return done(err);
                          done();  
                      });
        });

        // after(function(){
        //     console.log("\tRemoved Document : "+newCreatedID);
        // });
  });


// describe('Delete Entry _id:'+newCreatedID, function() {
// })
