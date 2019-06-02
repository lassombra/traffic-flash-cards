import {ViewConstants} from '../../viewMap';

export default function(state, action){
    if (action.type === ViewConstants.SWITCH_TO_CREATE) {
        return {...state, view:ViewConstants.CREATE_VIEW}
    } else {
        return state;
    }
}