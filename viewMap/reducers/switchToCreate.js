import {CREATE_VIEW, SWITCH_TO_CREATE} from '../constants';

export default function(state, action){
    if (action.type === SWITCH_TO_CREATE) {
        return {...state, view:CREATE_VIEW}
    } else {
        return state;
    }
}