const questionData = [
  ['Ile szlemów wygrała Iga Świątek?', ['2', '4', '5'], 2],
  ['W jakim mieście odbywa się Roland Garros?', ['W Marsylii', 'W Paryżu', 'W Maladze'], 1],
  ['W którym roku Iga wygrała US Open?', ['2020', '2022', '2024'], 1],
];
class Question {
  #title;
  #answers;
  #correctAnswer;
  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }
  get title() {
    return this.#title;
  }
  get answers() {
    return this.#answers;
  }
  checkAnswer(answer) {
    return this.#correctAnswer === answer;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;
  constructor(questions) {
    this.#questions = questions.map(
      question => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }
  displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    answersElement.textContent = '';
    questionElement.textContent = this.#questions[this.#currentQuestionIndex].title;
    this.#questions[this.#currentQuestionIndex].answers.forEach((answer, index) => {
      const answerElement = document.createElement('li');
      answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer"> ${answer}</label>`;
      answersElement.appendChild(answerElement);
    });
  }
  nextQuestion() {
    const selectedAnswer = document.querySelector('input:checked');
    if (selectedAnswer) {
      const answer = parseInt(selectedAnswer.value);
      if (this.#questions[this.#currentQuestionIndex].checkAnswer(answer)) {
        this.#score++;
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        this.displayQuestion();
      } else {
        this.displayResult();
      }
    } else {
      alert('nie udzieliłeś odpowiedzi!');
    }
  }
  displayResult() {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `Twój wynik ${this.#score} / ${this.#questions.length}`;
  }
}
const quiz = new Quiz(questionData);
quiz.displayQuestion();
