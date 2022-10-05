import getRandom from '../random.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, arrayLength, d) => {
  let result = [firstNumber];
  for (let i = 0; i < arrayLength; i += 1) {
    result.push(result[i] + d);
  }
  const findMe = result[getRandom(1, arrayLength - 1)];
  result[result.indexOf(findMe)] = '..';
  result = String(result.join(' '));
  return [result, findMe];
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandom(1, 100);
  const hiddenNumberIndex = getRandom(1, 10);
  const arrayLength = getRandom(5, 10);
  const [question, currentAnswer] = getProgression(firstNumber, arrayLength, hiddenNumberIndex);
  const answer = String(currentAnswer);
  return [question, answer];
};

const brainProgression = () => {
  startGame(description, getQuestionAndAnswer);
};

export default brainProgression;
