'use strict';
const btns = {
	againBtn: document.querySelector('.again'),
	checkBtn: document.querySelector('.check'),
};
const variableNumbers = {
	numberBox: document.querySelector('.numberText'),
	score: document.querySelector('.score'),
	highscore: document.querySelector('.highscore'),
	message: document.querySelector('.message'),
	input: document.querySelector('.input'),
};
const { numberBox, score, highscore, message, input } = variableNumbers;
const { againBtn, checkBtn } = btns;

let numberToCheck;
let inputNumber = input.value;
let scoreNum;
let highNum = highscore;
let arr = [];

const makeRandomNumber = () => {
	numberToCheck = Math.ceil(Math.random() * 20);
	return numberToCheck;
};
const resetGame = () => {
	if ((input.value = '')) {
		score.textContent = 20;
	} else {
		highNum.textContent = arr[arr.length - 1];
	}

	input.value = '';
	numberBox.textContent = '?';
	score.textContent = 0;
	message.textContent = 'Start guessing...';
	makeRandomNumber();
};
// let scoreContent = Number(score.textContent);
const checkNumber = () => {
	inputNumber = Number(input.value);
	// for (let i = 20; i >= 0; i--) {
	// 	if (inputNumber > numberToCheck) {
	// 		scoreContent = scoreNum - 1;
	// 		console.log('Liczba jest mniejsza');
	// 	} else if (inputNumber < numberToCheck) {
	// 		scoreContent - 1;
	// 		console.log('Liczba jest większa');
	// 	} else if (inputNumber === numberToCheck) {
	// 		scoreNum = inputNumber + Number(score.innerText);
	// 		score.textContent = scoreNum;
	// 		numberBox.textContent = scoreNum;
	// 		arr.push(scoreNum);
	// 		makeRandomNumber();
	// 	}
	if (inputNumber > numberToCheck) {
		console.log('Liczba jest mniejsza');
	} else if (inputNumber < numberToCheck) {
		console.log('Liczba jest większa');
	} else if (inputNumber === numberToCheck) {
		scoreNum = inputNumber + Number(score.innerText);
		score.textContent = scoreNum;
		numberBox.textContent = scoreNum;
		arr.push(scoreNum);
		makeRandomNumber();
	}
};

makeRandomNumber();
againBtn.addEventListener('click', resetGame);
checkBtn.addEventListener('click', checkNumber);
