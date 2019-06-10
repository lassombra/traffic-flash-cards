import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from '../createCard';
import firebase from 'react-native-firebase';

export default function persistenceMiddleWare(store) {
    let previousCards = undefined;
    function saveCards() {
        const cards = store.getState().cards;
        const index = store.getState().index;
        if (cards && cards !== previousCards) {
            writeCardsStorage(cards);
            writeCardsFireStore(cards);
        }
        previousCards = cards;
    }

    let cardLoader = AsyncStorage.getItem('cards')
    .then(cards => cards && JSON.parse(cards))
    .then(cards => {
        if (cards && cards.length) {
            let index = 0;
            for (let card of cards) {
                card.id = index;
                index++;
            }
            previousCards = cards;
            store.dispatch(Actions.loadCards(cards, index));
        }
    });
    return next => action => {
        const res = next(action);
        saveCards();
        return res;
    }
}
function writeCardsStorage(cards) {
    AsyncStorage.setItem('cards', JSON.stringify(cards));
}
function writeCardsFireStore(cards) {
    const decks = firebase.firestore().collection('decks');
    const deck = decks.doc(firebase.auth().currentUser.uid);
    deck.set({
        cards: cards.map(card => ({
            side1: card.side1,
            side2: card.side2
        })),
        owner: firebase.auth().currentUser.uid
    });
}