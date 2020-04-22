import { createContent } from "./createContent";
import cards from './cards';

const container: HTMLElement = document.querySelector('.content__container');


function playAudio(event: Event): void {
  if (event.target.closest('.card')) {
    let cardClick: string = event.target.closest('.card').id.toLowerCase();
    let category = document.querySelector('.category_text').innerHTML
    cardClick = cardClick[0].toUpperCase() + cardClick.slice(1);
    let path = cards[category].find(item => item.word == `${cardClick}`);
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
  if (!document.querySelector('.switch-btn').classList.contains('switch-on')) {
    if (document.querySelector('.category_text').innerHTML !== 'main') {
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
