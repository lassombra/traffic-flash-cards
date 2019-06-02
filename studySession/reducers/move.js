import {MOVE} from '../constants';
import {move} from './helpers';

export default function(state, action) {
    if (action.type === MOVE && state.activeCard && state.activeCard.flipped && state.deck && state.activeColor !== undefined) {
        cardSelect = move(state.activeCard, state.deck, state.activeColor, action.color);
        return {...state, ...cardSelect};
    } else {
        return state;
    }
}