import {REMOVE_CARD} from '../constants';

export default function(state, action){
    if (action.type === REMOVE_CARD) {
        return {
            ...state,
            cards: (state.cards || []).filter(card => card.id !== action.card.id)
        };
    } else {
        return state;
    }
}