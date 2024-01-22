$(document).ready(function() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
     $('.Guess').click(function() {
   var userGuess = $('.guessInput').val();
    if (userGuess == secretNumber) {
    $('.result').text('Good job! You guessed the correct number! and u can move to level 3');
   } else {
   var guess = (userGuess < secretNumber) ? 'Too low. Try again!' : 'Too high. Try again!';
    $('.result').text(guess);
                   }             
    $('.guessInput').val('');
               });
           });