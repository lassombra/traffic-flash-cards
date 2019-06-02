import {AsyncStorage} from 'react-native';
import {store} from './index';
import {Actions} from '../createCard';

export default function initPersistence() {
    let previousCards = undefined;
    function saveCards() {
        const cards = store.getState().cards;
        if (cards && cards !== previousCards) {
            AsyncStorage.setItem('cards', JSON.stringify(cards));
        }
        previousCards = cards;
    }

    store.subscribe(saveCards);

    AsyncStorage.getItem('cards')
    .then(cards => JSON.parse(cards))
    .then(cards => {
        previousCards = cards;
        store.dispatch(Actions.loadCards(cards));
    });
}