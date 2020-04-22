import Sound from "./audio";
import cards from "./cards";

// const switch: HTMLDivElement = document.querySelector('.switch-btn');

// console.log(document.querySelector('.switch-btn'))
// console.log(document.querySelector("body > main > section > div > div > div.category > h1"))

export function game() {
  if (document.querySelector('.switch-btn')?.classList.contains('switch-on')) {
    let category: string = document.querySelector('.category_text')?.innerHTML;
    let button: HTMLButtonElement = document.querySelector('.button-game')
    let sound = new Sound(category)
    let audioList = sound.soundGenerate()
    let i: number = 0;
    let currentAudio = sound.soundPlay(audioList, i)
    button.onclick = () => {
      // currentAudio.play()
      // i += 1;
      currentAudio = sound.soundPlay(audioList, i)
      if (!button.classList.contains('button-repeat')) {
        currentAudio.play()
        button.innerHTML = 'Repeat'
      }
      document.querySelectorAll('.card').forEach((card) => {
        card.onclick = (event) => {
          let currentCard = event.target.closest('.card').id;
          let path = cards[category].find(item => item.word === `${currentCard}`);
          // console.log(path.audio)
          // console.log(audioList[i])
          if (path.audio === audioList[i]) {
            console.log('УРА')
            i += 1;
          }
          else {
            console.log('НЕ УРА')
          }
        }
      })
    }
  } 
};



// document.addEventListener('click', play)

// console.log(document.querySelector('.category_text')?.innerHTML)
// console.log(document.querySelector('.category_text'))