import { swings, snatches, VaryResistance } from './throws.js';

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
document.getElementById('rollDiceBtn').addEventListener('click', function() {
  var option1 = document.getElementById('option1').checked;
  var fistPushUps = document.getElementById('toggleButton').checked;
  var resistanceVariation = document.getElementById('secondToggleButton').checked;
  var resultText = '';

  // Call fadeOutElements function after the result text is set
  fadeOutElements();

  //Wait for the fade-out transition to complete, then show the result text

  // Show result text line by line with one second delay 
  setTimeout(function() {
    document.getElementById('resultText').innerHTML = 'Rolling the dice...';
  }, 0);

  setTimeout(function() {
    document.getElementById('resultText').innerHTML = resultText;
  }, 1002);

  if (option1) {
    resultText = 'You chose Swings and Push-ups.<br>';
    resultText += fistPushUps ? swings(true) : swings(false);
  } else {
    resultText = 'You chose Snatches.<br>';
    resultText += snatches();
  }

  if (resistanceVariation) {
    resultText += VaryResistance();
  }
});

// Function to fade out and then hide elements
function fadeOutElements() {
  var buttonsAndToggles = document.querySelectorAll('.btn, .toggle');

  // Apply the fade-out class to each button and toggle
  buttonsAndToggles.forEach(function(element) {
    element.classList.add('fade-out');
  });

  // Set a timeout to hide the elements after the fade-out transition
  setTimeout(function() {
    buttonsAndToggles.forEach(function(element) {
      element.style.display = 'none';
    });
  }, 1000);
}
