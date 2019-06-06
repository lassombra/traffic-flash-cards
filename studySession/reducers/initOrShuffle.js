import {INIT_OR_SHUFFLE_DECKS, WHITE} from '../constants';
import {shuffleAndSelect} from './helpers';

export default function(state, action) {
    if (action.type === INIT_OR_SHUFFLE_DECKS) {
        let deck;
        if (state.deck && state.cycled_deck && (state.deck.length > 0 || state.cycled_deck.length > 0))
            deck = [...state.deck];
        else {
            deck = (state.cards || []).map(card => ({
                ...card,
                currentSide: 1,
                flipped: false,
                color: WHITE
            }));
        }
        let activeColor = state.activeColor !== undefined ? state.activeColor : WHITE;
        let activeCard = state.activeCard;
        let selected = shuffleAndSelect(deck, activeColor, activeCard, state.cycled_deck)
        return {...state, ...selected};
    }
    else return state;
}