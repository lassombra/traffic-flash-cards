import {CREATE_NEW_CARD} from '../constants';

export default function(state = {}, action) {
    if (action.type === CREATE_NEW_CARD) {
        const card = {...action.card};
        let index = state.index || 0;
        card.id = index;
        index++;
        return {...state,
            cards: [...(state.cards || []), card],
            index
        };
    } else {
        return state;
    }
}