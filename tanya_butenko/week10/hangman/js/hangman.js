$(document).ready(function(){

  var list_of_words = ['necklace', 'needle', 'onion', 'pants', 'passport'];
  //randomly choosing the word from list
  var word = list_of_words[Math.floor(Math.random() * list_of_words.length)];

  //put the amount of squares according to the amounth of letters in the word to the screen, with word letters on the back side of the squares
  _(word).each(function(i){

    var template = $('#wordTemplate').html();
    var wordHTML = Handlebars.compile(template);

    $('.word-container').append(wordHTML({word: i}))
  });


  $('.letter-container').on('click', function () {
    $(this).toggleClass('flipped');
  });

  var guess_attempts = 8;

  $(document.body).on('keypress', '#user_letter', function(e) {
    
    if (e.which === 13) { // if is enter

        e.preventDefault();

        var search_letter = $('#user_letter').val().toLowerCase();
        console.log(search_letter);
        oneLetterInput();
        $('#user_letter').val('');
        
    }
  });

});


 
// document.getElementById("word").textContent = word;


//user input for 1 letter
function oneLetterInput(){
  if ($('#user_letter').val().length > 1){
    alert('Put one letter');
    // return;
  };
}



//eteration throught the word to check if there is a letter there
    // if letter is there:
        //show letter in a proper squares
    // if letter is wrong:
        //minus life points
        // && 1 part of human appeares on the screen
        //if its life_points = 0
            //game is over


//button reset - choose another word from the list
//button give up - shows the solution, ends game


