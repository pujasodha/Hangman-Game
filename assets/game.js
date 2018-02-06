

 //Word bank
 var wordBank = ["anyong", "banana-stand", "loose-seal", "never-nude", "no-touching"];
 // alphabet
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

 var dashes = 0
 var dashesAndCorrect = []
 var currentWord = ""
 var currentLetter = []
 var lives = 10



 var wins = 0
 var losses = 0
 

 var guessedLetter = []
 var correctLetter = []
 var incorrectLetter = []




// alphabet 
var buttons = function () {
    var myButtons = document.getElementById('alphabet-btns');
    var letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }



 // the game functionality

 function play () {
    lives =  10;
     dashesAndCorrect = []
     guessedLetter = []
     incorrectLetter = []
     // select random word from wordbank
     currentWord = wordBank[Math.floor(Math.random()* wordBank.length)]
     // split word into letters to guess only letters
     currentLetter = currentWord.slpit("") 
     // number of blank spaces 
     dashes = currentLetter.length;
         for (var i=0; i<blanks; i++) {
             dashesAndCorrect.push("_")
         }
         console.log(currentWord);
         document.getElementById("currentWord").innerHTML = "What's The Phrase?" + dashesAndCorrect.join("")
         document.getElementById("remainingGuesses").innerHTML = "Number of Lives Left" + lives
         document.getElementById("lettersGuessed").innerHTML = "You Have Already Guessed: "
 }


 //check if users guess is in word
    function checkLetters(letters) {
        var inWord = false
        for (var i = 0; i < blanks; i++) {
        if (currentWord[i] === letter)
        inWord = true
     }
 }
    if (inWord) {
        for (var i = 0; i<blanks; i++) {
        if (currentWord[i]=== letter) {
         dashesAndCorrect[i] = letter
     }
    }
 
    console.log(dashesAndCorrect)
 }
 else { 
     incorrectLetter.push(letter);
     lives--;
     console.log("incorrect letter choice, " +lives+ " lives are left")
 }


function round () {
    console.log("WinCount: " + wins + " Losses: " + losses + "guesses: " + lives );

    document.getElementById("currentWord").innerHTML = "What's The Phrase?" + dashesAndCorrect.join("")
    document.getElementById("remainingGuesses").innerHTML = "Number of Lives Left" + lives
    document.getElementById("lettersGuessed").innerHTML = "You Have Already Guessed: "

    if (currentWord.toString () === dashesAndCorrect.toString ()) {
        wins++
        document.getElementsByID("word").innerHTML = "The word was " +"currentWord";
        alert("You win!")
    }

    document.getElementById("wins").innerHTML= "Wins: " + wins + " game(s)"
    play()

}
 if (lives === 0) {
    losses++ 
    document.getElementById("word").innerHTML = "You have lost" + losses + " game(s)"
    play()
}

document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


play();