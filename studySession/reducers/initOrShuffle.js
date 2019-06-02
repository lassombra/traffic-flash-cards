import {INIT_OR_SHUFFLE_DECKS, RED, YELLOW, GREEN, WHITE} from '../constants';
import {shuffleAndSelect} from './helpers';

export default function(state, action) {
    if (action.type === INIT_OR_SHUFFLE_DECKS) {
        let deck = [...(state.deck || (state.cards || []).map(card => ({
            ...card,
            currentSide: 1,
            flipped: false,
            color: WHITE
        })))];
        let activeColor = state.activeColor !== undefined ? state.activeColor : WHITE;
        let activeCard = state.activeCard;
        selected = shuffleAndSelect(deck, activeColor, activeCard)
        return {...state, ...selected};
    }
    else return state;
}