var wordBank = ['Annyong', 'Banana', 'Seal', 'Her', 'Nude', 'Touching'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];

var buttons = function () {
  var alphabetButtons = document.getElementById('alphabet-btns');

  if (alphabetButtons.firstElementChild) {
    // remove old, used letters
    var letters = document.getElementById('letters');
    alphabetButtons.removeChild(letters);
  }

  var alphabetButtons = document.getElementById('alphabet-btns');
  var letters = document.createElement('div');
  letters.id = 'letters';
  letters.className = 'offset-md-2 col-md-8 offset-md-2';

  for (var i = 0; i < alphabet.length; i++) {
    letterButton = document.createElement('button');
    letterButton.class = 'letter';
    letterButton.innerHTML = alphabet[i];
    checkLetter();
    letters.appendChild(letterButton);
  }

  alphabetButtons.appendChild(letters);
};

var gameState = function () {
  var lives = 10;
  var numberOfHiddenCharacters = 0;
  var word = '';
  var currentLetter = '';
  var guessedLetters = [];
  var correctlySelectedLetters = [];
  var incorrectlySelectedLetters = [];
  var placeholder = [];

  var wins = 0;
  var losses = 0;

  //check if users guess is in word
  checkLetter = function () {
    letterButton.onclick = function () {
      var guess = this.innerHTML;
      this.setAttribute('class', 'active');
      this.onclick = null;

      if (word.includes(guess)) {
        for (var i = 0; i < wordLength; i++) {
          // letter may exist multiple times in word
          if (word[i] === guess) {
            placeholder[i] = guess;
            correctlySelectedLetters.push(guess);
            console.log('Correct! ', guess, ' is a letter in the word');
          }
        }
      } else {
        incorrectlySelectedLetters.push(guess);
        lives--;
        console.log(
          'Incorrect, ',
          guess,
          ' is NOT a letter in the word. ' + lives + ' lives are left'
        );
      }

      guessedLetters = correctlySelectedLetters.concat(incorrectlySelectedLetters);
      updateDialogue();
    };
  };

  var play = function () {
    // reset values
    hiddenCharacters = 0;
    guessedLetters = [];
    correctlySelectedLetters = [];
    incorrectlySelectedLetters = [];

    randomIndex = Math.floor(Math.random() * wordBank.length);
    word = wordBank[randomIndex].toLowerCase(); // lowercase for input matching

    wordLetters = word.split(''); // split word into letters to prevent multiple similar operations
    wordLength = wordLetters.length;
    numberOfHiddenCharacters = wordLength; // number of blank spaces

    for (var i = 0; i < numberOfHiddenCharacters; i++) {
      placeholder.push('_');
    }

    console.log('Current Word:', word);
    console.log('Current placeholder: ', placeholder);

    // Dynamic Elements
    document.getElementById('currentState').innerHTML = placeholder.join(' ');
    document.getElementById('remainingGuesses').innerHTML = 'Number of Lives Left: ' + lives;
    document.getElementById('lettersGuessed').innerHTML =
      "You've Already Guessed: " + guessedLetters;
  };

  var updateDialogue = function () {
    // Dynamic Elements
    if (!lives) {
      losses++;
      document.getElementById('remainingGuesses').innerHTML = 'Number of Lives Left: ' + lives;
      document.getElementById('lettersGuessed').innerHTML =
        "You've Already Guessed: " + guessedLetters;
      document.getElementById('word').innerHTML =
        'You have lost' + losses + ' game(s). Please press "Reset"';
      return;
    }

    document.getElementById('currentState').innerHTML = placeholder.join(' ');
    document.getElementById('remainingGuesses').innerHTML = 'Number of Lives Left: ' + lives;
    document.getElementById('lettersGuessed').innerHTML =
      "You've Already Guessed: " + guessedLetters;
  };

  document.getElementById('reset').onclick = function () {
    correctlySelectedLetters = [];
    incorrectlySelectedLetters = [];
    guessedLetters = [];
    lives = 10;
    buttons();
    gameState();
  };

  buttons(); // generate alphabet buttons
  play();
};

window.onload = gameState();