$(document).ready(function(){

  var list_of_words = ['necklace', 'needle', 'onion', 'pants', 'passport'];
  //randomly choosing the word from list
  randomWord(list_of_words);

  //put the amount of squares according to the amounth of letters in the word to the screen, with word letters on the back side of the squares
  _(word).each(function(i){

    var template = $('#wordTemplate').html();
    var wordHTML = Handlebars.compile(template);

    $('.word-container').append(wordHTML({word: i}))
  });

  console.log(word);


  $(document.body)
    .on('submit', '#user_form', function(e) {
      e.preventDefault();
      inputLetter();      
    })

    .on('click', '#give_up_button', function(e) {
      e.preventDefault();
      giveUp();
    })

    .on('click', '#reset_word_button', function(e) {
      e.preventDefault();
      resetWord();
    });

});

function randomWord(words){
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};


function inputLetter(){
  var search_letter = $('#user_letter').val().toLowerCase();
  findLetter(search_letter);
  $('#user_letter').val('');
};

var guess_attempts = 8;

//flip square with a letter, so we can see it
function findLetter(letter){
  
  $word = $('.word:contains("'+letter+'")');
  if ($word.length) {
    $word.closest('div.letter-container').addClass('flipped');
  } else {
    guess_attempts -= 1;
    // && 1 part of human appeares on the screen
    gameOver(guess_attempts);
  }
  console.log(guess_attempts + ' attempts left');
};


 //if guess_attempts = 0 game is over
function gameOver(attempt){
  if (attempt == 0){
    alert('Your are dead! Game is over!');
    //button try again
  };
};

//opens all letters of the word
function giveUp(){
  $('letter-container').addClass('flipped');
};

//choosing another word from the list
function resetWord(){

};


