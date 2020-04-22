import Sound from "./audio";
import cards from "./cards";

export function game() {
  if (document.querySelector('.switch-btn')?.classList.contains('switch-on')) {
    let category: string = document.querySelector('.category_text')?.innerHTML;
    let button: HTMLButtonElement = document.querySelector('.button-game')
    let container: HTMLDivElement = document.querySelector('.content__container')
    let sound = new Sound(category)
    let audioList = sound.soundGenerate()
    let i: number = 0;
    let errorCounter: number = 0;
    let currentAudio = sound.soundPlay(audioList, i);
    button.onclick = () => {
      currentAudio = sound.soundPlay(audioList, i)
      if (!button.classList.contains('button-repeat')) {
        currentAudio.play()
        button.innerHTML = 'Repeat'
      }
      document.querySelectorAll('.card').forEach((card) => {
        card.onclick = (event) => {
          let currentCard = event.target.closest('.card');
          let path = cards[category].find(item => item.word === `${currentCard.id}`);

          if (!currentCard.classList.contains('card_correct')) {
            if (path.audio === audioList[i]) {
              let correct = new Audio('./audio/correct.mp3');
              correct.play();
              currentCard.classList.add('card_correct');
              i += 1;
              currentAudio = sound.soundPlay(audioList, i);
              setTimeout(() => currentAudio.play(), 1000)
            }
            else {
              let error = new Audio('./audio/error.mp3');
              error.play();
              errorCounter += 1;
            }
            if (i > 7) {
              let success = new Audio('./audio/success.mp3');
              success.play();
              console.log(`Ошибок: ${errorCounter}`);
              if (errorCounter === 0) {
                container.innerHTML = '<img class="image_success" src="./img/success.jpg" alt="Success">'
                // container.innerHTML = 'МОЛОДЕЦ'
              }
              else {
                // container.innerHTML = 'ЕЩЕ РАЗ ПОПРОБУЙ'
                container.innerHTML = '<img class="image_failure" src="./img/failure.jpg" alt="Failure"'
              }
            }
          }
        }
      })
    }
  } 
};


