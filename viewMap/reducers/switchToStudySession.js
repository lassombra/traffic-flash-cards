import {SWITCH_TO_STUDY_SESSION, STUDY_SESSION_VIEW} from '../constants';

export default function(state, action) {
    if (action.type === SWITCH_TO_STUDY_SESSION) {
        return {...state, view:STUDY_SESSION_VIEW};
    } else return state;
}