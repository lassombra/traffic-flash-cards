import {INIT_OR_SHUFFLE_DECKS, RED, YELLOW, GREEN, WHITE} from '../constants';

export default function(state, action) {
    if (action.type === INIT_OR_SHUFFLE_DECKS) {
        let unshuffled_deck = state.deck || (state.cards || []).map(card => ({
            ...card,
            currentSide: 1,
            flipped: false,
            color: WHITE
        }));
        let deck = [];
        while (unshuffled_deck.length > 0) {
            let card = unshuffled_deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
            deck.push(card);
        }
        return {...state, deck}
    }
    else return state;
}