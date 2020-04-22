import cards from './cards';

export class createCard {
  word: string;
  translation: string;
  image: string;
  audio: string;
  constructor({word, translation, image, audio}) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audio = audio;
  }
    card() {
      let template: string = '';
      let div: HTMLElement = document.createElement('div');
      div.classList.add('card');
      if (!this.audio) {
        div.classList.add('main')
      }
      div.id = this.word;
      template += '<div class="front">'
      template += `<img class='card_image' src=${this.image} alt=${this.word}>`
      template += `<div class="card_description">`;
      template += `<span class="card_text">${this.word}</span>`;
      if (this.audio) {
        template += '<img class="rotate-card" src="./img/rotate.png" alt="Get translate">'  
        }
      template += `</div>`
      template += `</div>`;
      if (this.audio) {
        template += `<div class="back">`;
        template += `<img class='card_image' src=${this.image} alt=${this.word}>`;
        template += `<div class="card_description">`;
        template += `<span class="card_text">${this.translation}</span>`;
        template += `</div>`;
        template += `</div>`;
      }
      div.innerHTML = template;
      return div;
  }
}
