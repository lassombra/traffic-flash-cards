import {createStore, applyMiddleware, compose} from 'redux';
import {reducer as createCard} from '../createCard';
import {reducer as viewDeck} from '../viewDeck';
import {reducer as studySession} from '../studySession';
import {reducer as viewMap} from '../viewMap';
import {ViewConstants} from '../viewMap'; // default view constant
import persistenceMiddleware from './persist';
import {monitorMiddleware} from './middleWare';
export {resultMonitor} from './middleWare';



function coreReducer(state = {view:ViewConstants.CREATE_VIEW}, action) {
    state = createCard(state, action);
    state = viewDeck(state, action);
    state = studySession(state, action);
    state = viewMap(state, action);

    return state;
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(coreReducer, composeEnhancers(applyMiddleware(monitorMiddleware, persistenceMiddleware)));