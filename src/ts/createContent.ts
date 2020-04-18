import cards from './cards';
import {createCard} from './createCards';


const createContent = (category: string) => {
  const getContainer = () => {
    const container: HTMLElement = document.querySelector('.content__container');
    container.innerHTML = '';
    return container;
  }

  const cardContent = (element: any) => {
    let cards: [] = [];
    element.forEach((el: any) => {
      cards.push(new createCard(el));
    });
    return cards;
  }

  const renderCard = () => {
    let container = getContainer();
    cardContent(cards[category]).forEach((el) => {
      container.append(el.card())
    })
  };
  renderCard();
  if (category === 'main') {
    let main: boolean = true;
  }
  else {
    let main: boolean = false;
  }
}

export {createContent};
