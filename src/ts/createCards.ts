import cards from './cards';

export class createCard {
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
    div.id = this.word;
    template += '<div class="card_image_container>"';
    template += `<b><img class='card_image' src=${this.image} alt=${this.word}>`
    template += '</div>';
    template += `<div class="card_description">`;
    template += `<span class="card_text">${this.word}</span>`;
    template += `<div class="card_invisible"><span class="text_hidden">${this.word.toLowerCase()}</span></div>`;
    template += `</div>`;
    div.innerHTML = template;
    return div;
  }
}
