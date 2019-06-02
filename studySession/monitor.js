import {resultMonitor} from '../state/middleWare';
import {ViewConstants} from '../viewMap';
import {Actions} from '../viewDeck';

function monitorFinished(prevState, state, dispatch) {
    if (state.view === ViewConstants.STUDY_SESSION_VIEW && state.deck && state.deck.length == 0 && state.cycled_deck && state.cycled_deck == 0 && !state.activeCard) {
        dispatch(Actions.switchToDeckView());
    }
}
resultMonitor.add(monitorFinished);