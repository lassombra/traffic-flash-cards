import {MOVE} from '../constants';
import {selectActiveCard, newActiveColor} from './helpers';

export default function(state, action) {
    if (action.type === MOVE && state.activeCard && state.activeCard.flipped && state.deck && state.activeColor !== undefined) {
        let deck = [...state.deck];
        let card = {...state.activeCard, flipped: false, currentSide: 1, color: action.color};
        deck.push(card);
        let activeCard = undefined;
        let activeColor = state.activeColor;
        [activeCard, deck, activeColor] = selectActiveCard(deck, activeColor, false);
        return {...state, activeCard, activeColor, deck};
    } else {
        return state;
    }
}