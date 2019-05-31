import {CREATE_NEW_CARD} from '../constants';

export default function(state = {}, action) {
    if (action.type === CREATE_NEW_CARD) {
        return {...state,
            cards: [...(state.cards || []), action.card],
        };
    } else {
        return state;
    }
}