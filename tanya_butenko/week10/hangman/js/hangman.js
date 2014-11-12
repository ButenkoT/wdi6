$(document).ready(function(){

  
  createWord();

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
    })

    .on('click', '#letter_open_button', function(e) {
      e.preventDefault();
      letterOpen();
    });

});

//choose random word from the list
function randomWord(){
  var list_of_words = ['necklace', 'needle', 'onion', 'pants', 'passport'];
  var word = list_of_words[Math.floor(Math.random() * list_of_words.length)];
  return word;
};

//put the amount of squares according to the amounth of letters in the word to the screen, with word letters on the back side of the squares

function createWord(){
  $('.letter-container').empty();
  var x = randomWord();
  _(x).each(function(i){

    var template = $('#wordTemplate').html();
    var wordHTML = Handlebars.compile(template);

    $('.word-container').append(wordHTML({word: i}))
  });

  console.log(x);

};

function inputLetter(){
  var search_letter = $('#user_letter').val().toLowerCase();
  $('.named_letters').append(search_letter + ' ');
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
    $('.hangman').closest('div').removeClass('hidden');
    gameOver(guess_attempts);
  }
  $('.attempts').text('Attempts left: ' + guess_attempts);
};


 //if guess_attempts = 0 game is over
function gameOver(attempt){
  if (attempt == 0){
    alert('Your are dead! Game is over!');
    //button try again
    $('.hangman').append('<img src="http://loldailyfun.com/wp-content/uploads/2012/04/Every-time-you-play-hangman.jpg">');
  };
};

//opens all letters of the word
function giveUp(){
  $('.letter-container').addClass('flipped');
};

//choosing another word from the list
function resetWord(){
  createWord();
};

function letterOpen(){

}

