// 1. Get DOM elements
const diceCountInput = document.getElementById('diceCount');
const diceDisplay = document.getElementById('diceDisplay');

// 2. Function to roll dice
function rollDice() {
  // 3. Get number of dice
  const count = Number(diceCountInput.value);
  
  // 4. Validate input
  if (isNaN(count) || count < 1 || count > 10 || !Number.isInteger(count)) {
    diceDisplay.textContent = 'Please enter a whole number between 1 and 10!';
    return;
  }
  
  // 5. Clear previous results
  diceDisplay.innerHTML = '';
  
  // 6. Roll and display dice
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // 1-6
    const die = document.createElement('div');
    die.classList.add('die');
    die.textContent = roll;
    diceDisplay.appendChild(die);
  }
}

// 7. Allow Enter key to roll
diceCountInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    rollDice();
  }
});