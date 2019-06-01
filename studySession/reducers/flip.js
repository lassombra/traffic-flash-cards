import {FLIP_ACTIVE} from '../constants';

export default function(state, action) {
    if (action.type === FLIP_ACTIVE && state.activeCard) {
        return {
            ...state,
            activeCard: {
                ...state.activeCard,
                currentSide: state.activeCard.currentSide % 2 + 1,
                flipped: true
            }
        }
    } else {
        return state;
    }
}