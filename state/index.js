import {createStore} from 'redux';
import createCard from '../createCard/reducers';
import {reducer as viewDeck} from '../viewDeck';
import {CREATE_VIEW} from '../createCard/constants'; // default view constant


function coreReducer(state = {view:CREATE_VIEW}, action) {
    state = createCard(state, action);
    state = viewDeck(state, action);

    return state;
}

export const store = createStore(coreReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());