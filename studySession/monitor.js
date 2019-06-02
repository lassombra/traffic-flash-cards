import {resultMonitor} from '../state/middleWare';
import {VIEW} from './constants';
import {Actions} from '../viewDeck';

function monitorFinished(prevState, state, dispatch) {
    if (state.view === VIEW && state.deck && state.deck.length == 0 && state.cycled_deck && state.cycled_deck == 0 && !state.activeCard) {
        dispatch(Actions.switchToDeckView());
    }
}
resultMonitor.add(monitorFinished);