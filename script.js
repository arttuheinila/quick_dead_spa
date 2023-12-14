// Function to update the visibility of the first toggle based on the selected option
function updateFirstToggleVisibility() {
  var isOption1Selected = document.getElementById('option1').checked;
  var toggleLabel = document.getElementById('toggleLabel');
  toggleLabel.style.display = isOption1Selected ? 'inline-block' : 'none';
}

// Add change event listeners to radio buttons
document.getElementById('option1').addEventListener('change', updateFirstToggleVisibility);
document.getElementById('option2').addEventListener('change', updateFirstToggleVisibility);

// Set the initial state of the first toggle
document.addEventListener('DOMContentLoaded', updateFirstToggleVisibility);

// Event listener for the button click to generate the result text
document.getElementById('rollDiceBtn').addEventListener('click', function () {
  var option1 = document.getElementById('option1').checked;
  var fistPushUps = document.getElementById('toggleButton').checked;
  var resistanceVariation = document.getElementById('secondToggleButton').checked;

  var dice = [];

  //   Get 5 random integers between 1-6 to dice array to simulate the dice throw
  for (let i = 0; i < 5; i++) {
    dice.push(Math.ceil(Math.random() * 6));
  }

  // Call fadeOutElements function after the result text is set
  fadeOutElements();

  // Set a timeout to show the result text after the fade-out transition
  setTimeout(function () {
    document.getElementById('rollingText').innerHTML = 'Rolling the dice...';
  }, 0);

  // Clear the rolling
  setTimeout(function () {
    document.getElementById('rollingText').innerHTML = '';
  }, 1000);


  // Get the dice face  
  // Function to reveal Dice with 1 second delay
  function showDice(callback) {
    var diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = ''; // Clear previous dice

    // Amount of Dice for Swings
    if (option1) {
      var diceCount = 3
      if (fistPushUps) {
        diceCount++;
      }
    }
    // Amount of Dice for Snatches
    else {
      var diceCount = 2
    }
    if (resistanceVariation) {
      diceCount++;
    }

    for (let i = 0; i < diceCount; i++) {
      setTimeout(function () {
        var diceNumber = dice[i];
        var imgElement = document.createElement('img');
        imgElement.src = 'dice' + diceNumber + '.png';
        imgElement.alt = 'Dice ' + diceNumber;
        diceContainer.appendChild(imgElement);

        // Check if this is the last dice to be shown
        if (i === diceCount - 1) {
          // Call the callback function after the last dice has been shown
          setTimeout(callback, 1000);
        }
      }, 1000 * i);
    }
  }

  function afterShowDice() {
    if (option1) {
      document.getElementById('exerciseType').innerHTML = 'Swings and Push-ups<br>';
    } else {
      document.getElementById('exerciseType').innerHTML = 'Snatches<br>';
    }
    // Get the show the reps and sets w. 1 second delay
    setTimeout(exerciseTypes, 0);
  }

  function exerciseTypes () {
    // Create delay before showing the exercise type
    var delay = 1000;

    // Always 2 dice
    // First dice number of sets
    setTimeout(function () {
    if (dice[0] == 1) {
      document.getElementById('exerciseType').innerHTML += '2 sets<br>';
    }  else if (dice[0] == 2 || dice[0] == 3) {
      document.getElementById('exerciseType').innerHTML += '3 sets<br>';
    } else if (dice[0] == 4 || dice[0] == 5) {
      document.getElementById('exerciseType').innerHTML += '4 sets<br>';
    } else if (dice[0] == 6) {
      document.getElementById('exerciseType').innerHTML += '5 sets<br>';
    } else {
      console.log('Something fishy w. numberOfSets')
    }
  }, delay);

    // Second dice repsInSet
    setTimeout(function () {
    if (dice[1] == 1 || dice[1] == 2) {
      document.getElementById('exerciseType').innerHTML += '5/4 reps/sets.<br>';
    } else if (dice[1] == 3 || dice[1] == 4) {
      document.getElementById('exerciseType').innerHTML += '5/4 and 10/2 reps/sets.<br>';
    } else if (dice[1] == 5 || dice[1] == 6) {
      document.getElementById('exerciseType').innerHTML += '10/2 reps/sets.<br>';
    } else {
      console.log('Something fishy w. repsInSet')
    }
  }, delay * 2);

    // If option1
    if (option1) {
      setTimeout(function () {
      // Third dice SwingsHandedness
      if (dice[2] <= 3) {
        document.getElementById('exerciseType').innerHTML += 'Two-handed Swings.<br>';
      } else {
        document.getElementById('exerciseType').innerHTML += 'One-handed Swings.<br>';
      }
    }, delay * 3);

      // If fistPushUps
      setTimeout(function () {
      if (fistPushUps) {
        // Fourth dice FistPushups
        if (dice[3] <= 3) {
          document.getElementById('exerciseType').innerHTML += 'Palm Push-ups.<br>';
        } else {
          document.getElementById('exerciseType').innerHTML += 'Fist Push-ups.<br>';
        }
      }
    }, delay * 4);

      // If fist pushups and resistanceVariation the delay is 5.
      setTimeout(function () {
        if (resistanceVariation && fistPushUps) {
          // Fifth dice ResistanceVariation
          if (dice[4] == 1) {
            document.getElementById('exerciseType').innerHTML += 'Resistance of X-. Down one bell size.'
          } else if (dice[4] == 2 || dice[4] == 3) {
            document.getElementById('exerciseType').innerHTML += 'X+ resistance. Up one bell size.'
          } else {
            document.getElementById('exerciseType').innerHTML += 'Normal resistance.'
          }
        }
      }, delay * 5);

      // If resistanceVariotion and no fist pushups the delay is 4.
      setTimeout(function () {
      if (resistanceVariation && !fistPushUps) {
        // Fifth dice ResistanceVariation
        if (dice[4] == 1) {
          document.getElementById('exerciseType').innerHTML += 'Resistance of X-. Down one bell size.'
        } else if (dice[4] == 2 || dice[4] == 3) {
          document.getElementById('exerciseType').innerHTML += 'X+ resistance. Up one bell size.'
        } else {
          document.getElementById('exerciseType').innerHTML += 'Normal resistance.'
        }
      }
    }, delay * 4);
    
    // If option2 and resistanceVariation the delay is only 3.
    } else if (resistanceVariation && !option1) {
      // Fifth dice ResistanceVariation
      setTimeout(function () {
      if (dice[4] == 1) {
        document.getElementById('exerciseType').innerHTML += 'Resistance of X-. Down one bell size.'
      } else if (dice[4] == 2 || dice[4] == 3) {
        document.getElementById('exerciseType').innerHTML += 'X+ resistance. Up one bell size.'
      } else {
        document.getElementById('exerciseType').innerHTML += 'Normal resistance.'
      }
    }, delay * 3);

  }


  }
  
  setTimeout(function () {
    showDice(afterShowDice);
  }, 1000);

});



// Function to fade out and then hide elements
function fadeOutElements() {
  var buttonsAndToggles = document.querySelectorAll('.btn, .toggle');

  // Apply the fade-out class to each button and toggle
  buttonsAndToggles.forEach(function (element) {
    element.classList.add('fade-out');
  });

  // Set a timeout to hide the elements after the fade-out transition
  setTimeout(function () {
    buttonsAndToggles.forEach(function (element) {
      element.style.display = 'none';
    });
  }, 1000);
}
