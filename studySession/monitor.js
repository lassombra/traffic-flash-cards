import {resultMonitor} from '../state/middleWare';
import {ViewConstants} from '../viewMap';
import {Actions} from '../viewDeck';
import {initOrShuffle} from './actions';

function monitorFinished(prevState, state, dispatch) {
    if (state.view === ViewConstants.STUDY_SESSION_VIEW && prevState.view !== ViewConstants.STUDY_SESSION_VIEW) {
        dispatch(initOrShuffle());
    } else if (state.view === ViewConstants.STUDY_SESSION_VIEW && state.deck && state.deck.length == 0 && state.cycled_deck && state.cycled_deck == 0 && !state.activeCard) {
        dispatch(Actions.switchToDeckView());
    }
}
resultMonitor.add(monitorFinished);