import {SWITCH_TO_STUDY_SESSION, VIEW} from '../constants';

export default function(state, action) {
    if (action.type === SWITCH_TO_STUDY_SESSION) {
        return {...state, view:VIEW};
    } else return state;
}