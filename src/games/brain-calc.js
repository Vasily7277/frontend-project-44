import getRandom from '../random.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      console.log(`Unexpected operator: ${operation}`);
  }
  return 'error';
};

const getQuestionAndAnswer = () => {
  const operation = operations[getRandom(0, 2)];
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(operation, firstNumber, secondNumber);
  return [question, answer];
};

const runBrainCalc = () => {
  startGame(description, getQuestionAndAnswer);
};

export default runBrainCalc;
