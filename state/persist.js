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
            AsyncStorage.setItem('index', JSON.stringify(index));
        }
        previousCards = cards;
    }

    store.subscribe(saveCards);

    let cardLoader = AsyncStorage.getItem('cards');
    let indexLoader = AsyncStorage.getItem('index');
    Promise.all([cardLoader, indexLoader])
    .then(([cards, index]) => ({cards, index}))
    .then(({cards, index}) => ({cards:JSON.parse(cards), index: JSON.parse(index)}))
    .then(({cards, index}) => {
        previousCards = cards;
        store.dispatch(Actions.loadCards(cards, index));
    });
}