$(document).ready(function(){
  $('#search_button').on('click', showMovies);
});

function showMovies(search) { 
  var search = $('#search').val();
  var encodedUrl = encodeURI(search);
  var omdbUrl = 'http://www.omdbapi.com/?s=';
 
  $.ajax({ 
      type: "GET",
      dataType: "jsonp",
      jsonp: 'callback',
      url: omdbUrl + encodedUrl,
      success: function(data){
          data.Search.forEach(function (result) {
            // var url = ['http://www.omdbapi.com/?i=&t=', result.Title].join(''),
              var $p = $('<p/>'),
              $a = $('<a/>', {href: '#'});

            $a.on('click', function(event) {
              event.preventDefault();
              getPoster($p, result);
            });
            
            $p.appendTo('.result');
            $a.html(result.Title);
            $a.appendTo($p);
          });
      },
      error: function() {
        return "Movie not found.";
      }
  });
};

function getPoster($p, result){


  var url = ['http://www.omdbapi.com/?i=&t=', result.Title].join('')
  $.ajax({ 
      type: "GET",
      dataType: "jsonp",
      jsonp: 'callback',
      url: url,
      success: function(data){

        var $img = $('<img/>', {src: data.Poster}).appendTo($p)
              
          
      },
      error: function() {
        return "Image not found.";
      }
  });

}
