$(document).ready(function() {
    var secretNumber = Math.floor(Math.random() * 20) + 1;
     $('.Guess').click(function() {
   var userGuess = $('.guessInput').val();
    if (userGuess == secretNumber) {
    $('.result').text('you are hacker or so lucky ');
   } else {
   var guess = (userGuess < secretNumber) ? 'Too low. Try again!' : 'Too high. Try again!';
    $('.result').text(guess);
                   }             
    $('.guessInput').val('');
               });
           });