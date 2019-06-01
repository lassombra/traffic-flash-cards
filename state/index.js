import {createStore} from 'redux';
import {reducer as createCard} from '../createCard';
import {reducer as viewDeck} from '../viewDeck';
import {reducer as studySession} from '../studySession';
import {CREATE_VIEW} from '../createCard/constants'; // default view constant



function coreReducer(state = {view:CREATE_VIEW}, action) {
    state = createCard(state, action);
    state = viewDeck(state, action);
    state = studySession(state, action);

    return state;
}

export const store = createStore(coreReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());