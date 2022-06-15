'use strict';

const state = {
  tempValue: 75,
  degImperial: true,
  color: 'orange',
  landscape: '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',

  // arrow: "⬆"
};
// Function to increase temp Value by clicking up arrow
const incTempAction = () => {
  state.tempValue += 1;
  const tempDigit = document.getElementById('tempValue');
  tempDigit.textContent = state.tempValue;
  tempValueColorAction();
  landscapeChangeAction();
};

// event listner
const upTempElement = document.getElementById('upTemp');
upTempElement.addEventListener('click', incTempAction);

// Function to decrease temp Value by clicking up arrow
const decTempAction = () => {
  state.tempValue -= 1;
  const tempDigit = document.getElementById('tempValue');
  tempDigit.textContent = state.tempValue;
  tempValueColorAction();
  landscapeChangeAction();
};

// event listner
const downTempElement = document.getElementById('downTemp');
downTempElement.addEventListener('click', decTempAction);

const tempValueColorAction = () => {
  console.log('tempValueColor being called');
  // state.color = 'orange';
  const tempColorElement = document.getElementById('tempValue');
  // tempColorElement.className = color;
  if (state.tempValue <= 49) {
    tempColorElement.style.color = 'teal';
  } else if (50 < state.tempValue && state.tempValue < 59) {
    tempColorElement.style.color = 'green';
  } else if (60 <= state.tempValue && state.tempValue < 69) {
    tempColorElement.style.color = 'yellow';
  } else if (70 < state.tempValue && state.tempValue < 79) {
    tempColorElement.style.color = 'orange';
  } else {
    // tempColorElement.className = "red";
    tempColorElement.style.color = 'red';
  }
};

const landscapeChangeAction = () => {
  // state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  const landscapeElement = document.getElementById('landscape');
  landscapeElement.textContent = state.landscape;

  if (state.tempValue <= 59) {
    landscapeElement.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (60 < state.tempValue && state.tempValue < 69) {
    landscapeElement.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (70 <= state.tempValue && state.tempValue < 79) {
    landscapeElement.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (80 < state.tempValue) {
    landscapeElement.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};

const outputCityName = () => {
  const outputCityElement = document.getElementById('outputCity');
  const inputCityElement = document.getElementById('inputCity');
  state.city = inputCityElement;
};

// const arrowEx = () => {
//   // state.arrow += "⬆"
//   const upTempElement = document.getElementById('upTemp');
//   upTempElement.textContent += '⬆';
// };

// upTempElement.addEventListener('click', arrowEx);

// const increaseTemp = () => {
//   state.temp += 1;
//   formatTempAndGarden();
// };
