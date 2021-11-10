function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(80, playerName);
  postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player') {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  }
  return inputElement.value;
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
  let logger: (value: string) => void;
  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.log(err);
}

let myResult: Result = {
  playerName: 'Marie',
  score: 5,
  problemCount: 5,
  factor: 7
};

let player: Person = {
  name: 'Daniel',
  formatName: () => 'Dan'
}