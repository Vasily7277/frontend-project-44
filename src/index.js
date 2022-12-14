import readlineSync from 'readline-sync';

const numberOfRounds = 3;

function startGame(gameRule, newRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let currentRound = 0; currentRound < numberOfRounds; currentRound += 1) {
    const [question, answer] = newRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
