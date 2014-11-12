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
  console.log(word);

  // $('.letter-container').on('click', function () {
  //   $(this).toggleClass('flipped');
  // });

  var guess_attempts = 8;

  console.log('You have ' + guess_attempts + ' attempts left');

  $(document.body).on('keypress', '#user_letter', function(e) {
    
    if (e.which === 13) { // if is enter

        e.preventDefault();

        var search_letter = $('#user_letter').val().toLowerCase();

        console.log(search_letter);
        //check that input is only 1 letter
        oneLetterInput(search_letter);
        //check if any matching letter in the word
        matchingLetter(word, search_letter);
        //clean the input field
        $('#user_letter').val('');
        
    }
  });

});


//check if user input is 1 letter
function oneLetterInput(foo){
  if (! /^[A-z]$/.test(foo)) {
      alert('Put one letter');
  };
};


//checking if word has a user_input_letter
function matchingLetter(word, search_letter){
  // if (word.indexOf(search_letter) != -1){
  for (var i = 0, len = word.length; i < len; i++) {
    if (word[i]  ==  search_letter){
        //flip square with a letter, so we can see it
        $('.word-container:contains(word[i])').toggleClass('flipped');
        console.log('this letter in a word');
    } else {
      console.log('this letter is not in the word');
      // guess_attempts -= 1;
      // // && 1 part of human appeares on the screen
      // gameOver(guess_attempts);
    }
  }
};

 //if guess_attempts = 0 game is over
function gameOver(attempt){
  if (attempt == 0){
    alert('Your are dead! Game is over!');
    //button try again
  };
};


//button reset - choose another word from the list
//button give up - shows the solution, ends game


