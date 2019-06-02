import {LOAD_CARDS} from '../constants';

export default function(state, action) {
    if (action.type === LOAD_CARDS) {
        return {...state, cards: action.cards, index: action.index};
    } else {
        return state;
    }
}