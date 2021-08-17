'use strict';
const result = document.getElementById('result');
const quizForm = document.getElementById('quiz-form');
const btnSubmit = document.getElementById('btn-submit');

const correctAnswers = ['80°', '3', 'scalene'];

// functions

//event listeners

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const fromResult = new FormData(quizForm);
  let score = 0;
  let index = 0;
  fromResult.forEach((answer) => {
    if (answer === correctAnswers[index]) {
      score++;
      index++;
    } else {
      index++;
    }
  });
  result.style.display = 'block';
  result.innerText = `Your score is ${score}`;
});
