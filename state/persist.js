import {AsyncStorage} from 'react-native';
import {Actions} from '../createCard';

export default function persistenceMiddleWare(store) {
    let previousCards = undefined;
    function saveCards() {
        const cards = store.getState().cards;
        const index = store.getState().index;
        if (cards && cards !== previousCards) {
            AsyncStorage.setItem('cards', JSON.stringify(cards));
        }
        previousCards = cards;
    }

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
    return next => action => {
        const res = next(action);
        saveCards();
        return res;
    }
}