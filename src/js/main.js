'use strict';
const body = document.querySelector('body');
const btns = {
	againBtn: document.querySelector('.again'),
	checkBtn: document.querySelector('.check'),
};
const variable = {
	numberBox: document.querySelector('.numberText'),
	score: document.querySelector('.score'),
	highscore: document.querySelector('.highscore'),
	message: document.querySelector('.message'),
	input: document.querySelector('.input'),
};

const { numberBox, score, highscore, message, input } = variable;
const { againBtn, checkBtn } = btns;
let randomNumber;
let inputNumber = Number(input.value);
let scoreContent = Number(score.textContent);
let highNum = highscore;
let arr = [];
let num = 5;

const makeRandomNumber = () => {
	randomNumber = Math.ceil(Math.random() * 10);
	return randomNumber;
};

const resetGame = () => {
	scoreContent = 5;
	score.textContent = num;
	body.classList.remove('win-background', 'lose-background');
	input.value = '';
	numberBox.textContent = highNum;
	numberBox.textContent = '?';
	message.textContent = 'Start guessing...';
	makeRandomNumber();
};

const checkNumber = () => {
	let highscoreContent = Number(highscore.textContent);
	let numberBoxContent = Number(numberBox.textContent);
	if (score.textContent >= 1) {
	} else {
		arr = [];
		if (highscoreContent > numberBoxContent) {
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
			return;
		} else if (highscoreContent < numberBoxContent) {
			highscore.textContent = numberBox.textContent;
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
		} else if (highscoreContent === numberBoxContent) {
			highscore.textContent = numberBox.textContent;
			message.textContent = 'You loose!';
			body.classList.add('lose-background');
		} else {
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

makeRandomNumber();
againBtn.addEventListener('click', resetGame);
checkBtn.addEventListener('click', checkNumber);
