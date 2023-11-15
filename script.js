import { swings, snatches, resistanceVariation} from './throws.js';

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
  
    if (option1) {
      resultText = 'You chose Swings and Push-ups.<br>';
      if (fistPushUps) {
        resultText += swings(fistPushUps=true)
        // resultText += ' You will be doing Fist Push-ups.';
      } else {
        resultText += swings(fistPushUps=false)
      }
    } else {
      resultText = 'You chose Snatches.<br>';
      resultText += snatches()
    }
  
    if (resistanceVariation) {
      resultText += ' Add resistance variation to your workout.';
    }
  
    document.getElementById('resultText').innerHTML = resultText;
  });
  