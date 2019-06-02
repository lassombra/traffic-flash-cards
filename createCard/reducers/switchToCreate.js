import {SWITCH_TO_CREATE, CREATE_VIEW} from '../constants';

export default function(state, action){
    if (action.type === SWITCH_TO_CREATE) {
        return {...state, view:CREATE_VIEW}
    } else {
        return state;
    }
}