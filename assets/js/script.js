// const blockImg = document.getElementById('block');
// const imgPlay = document.querySelector('.block-img');

// let randomCounter = Math.floor(Math.random() * (15 - 4) + 4);
// let counter = 0;
// const randomMove = event => {
//   counter++;
//   let posY = Math.floor(Math.random() * window.innerHeight);
//   let posX = Math.floor(Math.random() * window.innerWidth);
//   if (posX >= window.innerWidth - 300) posX = window.innerWidth - 300;
//   if (posY >= window.innerHeight - 180) posY = window.innerHeight - 180;
//   blockImg.style = `transform: translate(${posX}px, ${posY}px)`;
//   console.log(counter);
//   console.log(randomCounter);
//   if (counter == randomCounter) {
//     blockImg.removeEventListener('mouseenter', randomMove);
//     console.log('Run OFF');
//     blockImg.addEventListener('click', _shotCorrupt);
//     console.log('Shot mode ON');
//   }
// };

// const _shotCorrupt = event => {
//   console.log('shot mode OFF');
//   blockImg.removeEventListener('click', _shotCorrupt);
//   alert('killed');
// };

// console.log('Run ON');
// blockImg.addEventListener('mouseenter', randomMove);

let img = {
  head: 'assets/img/head.png',
  body: 'assets/img/body.png',
};
let game = new CorruptGame('#start-game', img);

game.init();
