$(document).ready(function(){
  $('#search_button').on('click', showMovies);
  //can do parent delegation to put 2nd click on. it ll listen to parent and will work anytime child when child will be ready
});

function showMovies(search) { 
  var search = $('#search').val();  //getting request from input
  var encodedUrl = encodeURI(search);  //encode the request if more then 1 word
  var omdbUrl = 'http://www.omdbapi.com/?s=';
 
 //making request on all movies with a similar title
  $.ajax({ 
      type: "GET",
      dataType: "jsonp",      //making save request if we run in not from local
      jsonp: 'callback',      //doing callback cos of jsonp
      url: omdbUrl + encodedUrl,
      //if request is successfull giving a list of titles as a links
      success: function(data){
          data.Search.forEach(function (result) {
              var $p = $('<p/>'),
              $a = $('<a/>', {href: '#'}); //creating an empty link
             //clicked link calls on getPoster function and prevent default behaviour of links
            $a.on('click', function(event) {
              event.preventDefault();
              getPoster($p, result); //inside passing information and p as arguments
            });
            
            $p.appendTo('.result'); //appending p into div with class result
            $a.html(result.Title);  //storing the titles to the links
            $a.appendTo($p);        //adding links to the p
          });
      },
      error: function() {
        return "Movie not found.";
      }
  });
};

//function that gets individual poster for movie
function getPoster($p, result){
  //changing url cos we are targeting full info for single movie
  var url = ['http://www.omdbapi.com/?i=&t=', result.Title].join('')
  $.ajax({ 
      type: "GET",
      dataType: "jsonp",
      jsonp: 'callback',
      url: url,
      success: function(data){
        //getting poster and storing it in img that appended to p
        var $img = $('<img/>', {src: data.Poster}).appendTo($p)
                   
      },
      error: function() {
        return "Image not found.";
      }
  });
}
