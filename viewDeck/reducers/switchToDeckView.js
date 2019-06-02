import {SWITCH_TO_DECK_VIEW, DECK_VIEW} from '../constants';
import deckViewState from './deckViewState';

export default function(state, action){
    if (action.type === SWITCH_TO_DECK_VIEW) {
        return {...state, ...deckViewState()}
    } else {
        return state;
    }
}