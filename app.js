document.addEventListener('DOMContentLoaded', function () {
  const gameArea = document.getElementById('game-area');
  const scoreValue = document.getElementById('score-value');
  const startButton = document.getElementById('start-button');
  const lossMessage = document.getElementById('loss-message');
  const winMessage = document.getElementById('win-message');
  const restartButton = document.getElementById('restart-button');
  const restartButtonWin = document.getElementById('restart-button-win');

  let score = 0;
  let objectsDropped = 0;
  const maxObjects = 100; // Límite de objetos que se pueden dejar caer
  let gameStarted = false;

  const objects = [
    { src: 'col1.png', points: 1 },
    { src: 'col2.png', points: 1 },
    { src: 'col3.png', points: 1 },
    { src: 'col4.png', points: 1 },
    { src: 'col5.png', points: 1 },
    { src: 'col6.png', points: 1 },
    { src: 'col7.png', points: -5 }
  ];

  function createObject() {
    if (objectsDropped >= maxObjects) {
      gameOver();
      return;
    }
  
    const obj = objects[Math.floor(Math.random() * objects.length)];
    const element = document.createElement('img');
    element.src = obj.src;
    element.classList.add('object');
    element.style.left = `${Math.random() * 350}px`; // Ajusta el rango horizontal según tus necesidades
    element.style.top = '-50px'; // Empiezan arriba del área de juego
    element.addEventListener('click', () => {
      score += obj.points;
      scoreValue.textContent = score;
      if (score >= 50) {
        winMessage.style.display = 'block';
        return;
      }
      if (obj.points < 0) {
        gameOver();
      }
      element.remove();
    });
    gameArea.appendChild(element);
    objectsDropped++;
  }
  

  function gameOver() {
    if (gameStarted) {
      lossMessage.style.display = 'block';
      gameStarted = false;
    }
  }
  

  function resetGame() {
    score = 0;
    scoreValue.textContent = score;
    objectsDropped = 0;
    lossMessage.style.display = 'none';
    winMessage.style.display = 'none';
    gameStarted = true;
  }

  function startGame() {
    resetGame();
    startButton.style.display = 'none';
    setInterval(createObject, 3000);
    gameStarted = true;
  }

  startButton.addEventListener('click', startGame);

  restartButton.addEventListener('click', resetGame);
  restartButtonWin.addEventListener('click', resetGame);
});


