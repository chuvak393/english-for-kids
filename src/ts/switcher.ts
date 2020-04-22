import { game } from './play'

const switcher: HTMLElement = document.querySelector('.switch-btn');
const hamburger: HTMLElement = document.querySelector('.hamburger');
const nav: HTMLElement = document.querySelector('.nav');
function switchOn(): void {
  let gameButton: HTMLButtonElement = document.createElement('button')
  gameButton.classList.add('button-game')
  gameButton.innerHTML = 'Start'
  if (switcher.classList.contains('switch-on')) {
    switcher.classList.remove('switch-on');
    hamburger.classList.remove('hamburger-play');
    nav.classList.remove('nav-active-play');
    document.querySelector('.category_text').classList.remove('category_text-play')
  } else {
    switcher.classList.add('switch-on');
    hamburger.classList.add('hamburger-play');
    nav.classList.add('nav-active-play');
    document.querySelector('.category_text').classList.add('category_text-play')
  }
  if (document.querySelector('.category_text').innerHTML !== 'main') {
    document.querySelectorAll('.card').forEach((card) => {
      if (card.classList.contains('card_play')) {
        card.classList.remove('card_play')
      }
      else {
        card.classList.add('card_play')
      }
    })
    if (document.querySelector('.content__container').contains(document.querySelector('.button-game'))) {
      document.querySelector('.button-game').remove()
    }
    else {
      document.querySelector('.content__container').append(gameButton)
      game()
    }
  }
}
switcher.addEventListener('click', switchOn);
