'use strict';
const body = document.querySelector('body');
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
let randomNumber = 1;
let inputNumber = input.value;
let scoreValue = 6;
let scoreContent = Number(score.textContent);
let highNum = highscore;
let arr = [];
let sum = 0;

const makeRandomNumber = () => {
	randomNumber = Math.ceil(Math.random() * 10);

	return randomNumber;
};

const resetGame = () => {
	let num = 5;
	scoreContent = scoreValue;
	score.textContent = num;
	body.classList.remove('win-background', 'lose-background');
	input.value = '';
	numberBox.textContent = highNum;
	numberBox.textContent = '?';
	message.textContent = 'Start guessing...';
	makeRandomNumber();
};

const checkNumber = () => {
	console.log(randomNumber);
	if (score.textContent >= 1) {
	} else {
		arr = [];
		if (highscore.textContent > numberBox.textContent) {
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
			console.log('1');
			return;
		} else if (highscore.textContent < numberBox.textContent) {
			console.log('2');
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
			highscore.textContent = numberBox.textContent;
		} else {
			highscore.textContent = numberBox.textContent;
			console.log('3');
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
		}
		return;
	}
	inputNumber = Number(input.value);
	if (inputNumber > randomNumber) {
		body.classList.remove('win-background');
		scoreContent--;
		score.textContent = scoreContent;
		message.textContent = 'Less value';
	} else if (inputNumber < randomNumber) {
		body.classList.remove('win-background');
		scoreContent--;
		score.textContent = scoreContent;
		message.textContent = 'Higher value';
	} else if (inputNumber === randomNumber) {
		makeRandomNumber();
		message.textContent = 'Correct value';
		arr.push(score.textContent);
		body.classList.add('win-background');
		let newArr = arr.map(el => {
			return Number(el);
		});
		numberBox.textContent = newArr.reduce((a, b) => a + b);
	}
};

// makeRandomNumber();
againBtn.addEventListener('click', resetGame);
checkBtn.addEventListener('click', checkNumber);
