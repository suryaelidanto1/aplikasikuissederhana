const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');


let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');




startButton.addEventListener('click' , startGame);
nextButton.addEventListener('click', () => {

	currentQuestionIndex++;
	setNextQuestion();


});



function startGame() {
	console.log('Berjalan...');
	startButton.classList.add('hide'); 
	shuffledQuestions = questions.sort(() => Math.random() - .5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove('hide'); 
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);



}

function showQuestion(question) {

	questionElement.innerText = question.question;
	question.answers.forEach(answer => {

		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');   
		if(answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtonsElement.appendChild(button);
	});


}


function resetState() {

	clearStatusClass(document.body);
	nextButton.classList.add('hide');
	while(answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);

	} 

}



function selectAnswer(e) {

	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;
	setStatusClass(document.body,correct);
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct);
	});

		if(shuffledQuestions.length > currentQuestionIndex + 1) {

			nextButton.classList.remove('hide');


		} else {

			startButton.innerText = 'Ulangi';
			startButton.classList.remove('hide');

		}


}


function setStatusClass(element, correct) {

	clearStatusClass(element);
	if(correct) {

		element.classList.add('correct');

	} else {

		element.classList.add('wrong');

	}

}


function clearStatusClass(element) {

	element.classList.remove('correct');
	element.classList.remove('wrong');

}




const questions = [
	{
		question: 'Berapa hasil dari 1+1 = ....',
		answers: [
		{ text: '2', correct:true },
		{ text: '4', correct:false },
		{ text: '6', correct:false },
		{ text: '8', correct:false }
		]
	}, 
	{
		question: 'Siapa developernya?',
		answers: [
		{ text: 'Cintara', correct:true },
		{ text: 'Surya', correct:true },
		{ text: 'Elidanto', correct:true },
		{ text: 'Nothing', correct:false }
		]
	},
		{
		question: 'Siapa namamu?',
		answers: [
		{ text: 'A', correct:false },
		{ text: 'B', correct:false },
		{ text: 'C', correct:false },
		{ text: 'Nothing', correct:true }
		]
	},
		{
		question: 'Apa yang anda suka lakukan?',
		answers: [
		{ text: 'Makan', correct:true },
		{ text: 'Tidur', correct:true },
		{ text: 'Tidak Ada', correct:false },
		{ text: 'Main Games', correct:true }
		]
	}

]