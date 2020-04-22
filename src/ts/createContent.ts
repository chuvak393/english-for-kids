import cards from './cards';
import {createCard} from './createCards';
import { game } from './play';


const createContent = (category: string) => {
  const getContainer = () => {
    const container: HTMLElement = document.querySelector('.content__container');
    container.innerHTML = '';
    return container;
  }

  const cardContent = (element: any): [] => {
    let cards: [] = [];
    element.forEach((el: any) => {
      cards.push(new createCard(el));
    });
    return cards;
  }
  const categoryName = (): any => {
    let container = getContainer()
    let categoryName = document.createElement('div');
    categoryName.classList.add('category')
    let categoryText = document.createElement('h1');
    categoryText.classList.add('category_text')
    categoryText.innerHTML = `${category}`
    categoryName.append(categoryText)
    container.append(categoryName)
  }
  const renderCard = (): void => {
    let container = getContainer();
    categoryName()
    cardContent(cards[category]).forEach((el) => {
      container.append(el.card());
    })
    if (document.querySelector('.switch-btn').classList.contains('switch-on')) {
      if (document.querySelector('.category_text').innerHTML !== 'main') {
        document.querySelectorAll('.card').forEach((card) => {
          card.classList.add('card_play')
        })
        let gameButton: HTMLButtonElement = document.createElement('button')
        gameButton.classList.add('button-game')
        gameButton.innerHTML = 'Start'
        container.append(gameButton)
        game()
      }
    }
  };
  renderCard();
  if (category === 'main') {
    Boolean(localStorage.setItem('main', 'True'));
  }
  else {
    Boolean(localStorage.setItem('main', ''));
  }
}

export {createContent};
