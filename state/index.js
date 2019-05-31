import {createStore} from 'redux';
import createCard from '../createCard/reducers';

export const store = createStore(createCard, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());