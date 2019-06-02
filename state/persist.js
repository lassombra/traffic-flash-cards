import {AsyncStorage} from 'react-native';
import {store} from './index';
import {Actions} from '../createCard';

export default function initPersistence() {
    let previousCards = undefined;
    function saveCards() {
        const cards = store.getState().cards;
        const index = store.getState().index;
        if (cards && cards !== previousCards) {
            AsyncStorage.setItem('cards', JSON.stringify(cards));
        }
        previousCards = cards;
    }

    store.subscribe(saveCards);

    let cardLoader = AsyncStorage.getItem('cards')
    .then(cards => JSON.parse(cards))
    .then(cards => {
        let index = 0;
        for (let card of cards) {
            card.id = index;
            index++;
        }
        previousCards = cards;
        store.dispatch(Actions.loadCards(cards, index));
    });
}