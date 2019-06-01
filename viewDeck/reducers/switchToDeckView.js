import {SWITCH_TO_DECK_VIEW, DECK_VIEW} from '../constants';

export default function(state, action){
    if (action.type === SWITCH_TO_DECK_VIEW) {
        return {...state, view:DECK_VIEW}
    } else {
        return state;
    }
}