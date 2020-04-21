import { createContent } from "./createContent";
import cards from './cards';

const container: HTMLElement = document.querySelector('.content__container');

// if (localStorage.getItem('play') === 'false') {
//   if (!Boolean(localStorage.getItem('main'))) {
//     let categoryName: string = this.event.target.closest('.card').id.toLowerCase();
//     playAudio
//   }
// }


// class cardClick {
//   event: Event
//   constructor(event: Event) {
//     this.event = event;
//   }
//   playAudio(event: Event): void {
//     if (this.event.target.closest('.card')) {
//     let categoryName: string = this.event.target.closest('.card').id.toLowerCase();
//     let category = localStorage.getItem('category')
//     categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
//     let path = cards[category].find(item => item.word == `${categoryName}`);
//     let sound = new Audio(path.audio);
//       sound.play()
//     }
//   }
//   cardEventClick(): void {
//     if (localStorage.getItem('play') === 'false') {
//       if (!Boolean(localStorage.getItem('main'))) {
//         this.playAudio
//       }
//     }
//   }
//   container.addEventListener('click', cardEventClick)
// }

function playAudio(event: Event): void {
  if (event.target.closest('.card')) {
    let categoryName: string = event.target.closest('.card').id.toLowerCase();
    let category = localStorage.getItem('category')
    categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
    let path = cards[category].find(item => item.word == `${categoryName}`);
    let sound = new Audio(path.audio);
    sound.play()
  }
}



function cardRotate(event: Event): void {
  let card = event.target.closest('.card');
    if (!card.classList.contains('translate')) {
      card.classList.add('translate');
   } 
}

function cardClick(event: Event): void {
  if (localStorage.getItem('play') === 'false') {
    if (!Boolean(localStorage.getItem('main'))) {
      if (event.target.classList.contains('rotate-card')) {
        cardRotate(event)
        event.target.closest('.card').onmouseleave = () => {
          event.target.closest('.card').classList.remove('translate')
        }
      }
      else playAudio(event)
    }
  }
}


container.addEventListener('click', cardClick)
