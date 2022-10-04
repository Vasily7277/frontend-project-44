import getRandom from '../random.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function getQuestionAndAnswer() {
  const question = getRandom(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

function brainEven() {
  startGame(description, getQuestionAndAnswer);
}

export default brainEven;
