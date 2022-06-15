'use strict';

const state = {
  tempValue: 75,
  degImperial: true,
  // arrow: "⬆"
};
// Function to increase temp Value by clicking up arrow
const incTempAction = () => {
  state.tempValue += 1;
  const tempDigit = document.getElementById('tempValue');
  tempDigit.textContent = state.tempValue;
};

// event listner
const upTempElement = document.getElementById('upTemp');
upTempElement.addEventListener('click', incTempAction);

// Function to decrease temp Value by clicking up arrow
const decTempAction = () => {
  state.tempValue -= 1;
  const tempDigit = document.getElementById('tempValue');
  tempDigit.textContent = state.tempValue;
};

// event listner
const downTempElement = document.getElementById('downTemp');
downTempElement.addEventListener('click', decTempAction);

// const arrowEx = () => {
//   // state.arrow += "⬆"
//   const upTempElement = document.getElementById('upTemp');
//   upTempElement.textContent += '⬆';
// };

// upTempElement.addEventListener('click', arrowEx);

// const decreaseTempControl = document.getElementById('decreaseTempControl');
// decreaseTempControl.addEventListener('click', decreaseTemp);

// const increaseTemp = () => {
//   state.temp += 1;
//   formatTempAndGarden();
// };

// const decreaseTemp = () => {
//   state.temp -= 1;
//   formatTempAndGarden();
// };
