import {createStore, applyMiddleware, compose} from 'redux';
import {reducer as createCard} from '../createCard';
import {reducer as viewDeck} from '../viewDeck';
import {reducer as studySession} from '../studySession';
import {CREATE_VIEW} from '../createCard/constants'; // default view constant
import persistenceMiddleware from './persist';
import {monitorMiddleware} from './middleWare';
export {resultMonitor} from './middleWare';



function coreReducer(state = {view:CREATE_VIEW}, action) {
    state = createCard(state, action);
    state = viewDeck(state, action);
    state = studySession(state, action);

    return state;
}

export const store = createStore(coreReducer, compose(applyMiddleware(monitorMiddleware, persistenceMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));