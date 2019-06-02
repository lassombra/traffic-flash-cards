import {resultMonitor} from '../state/middleWare';

function monitorFinished(prevState, state, dispatch) {
    console.log(prevState, state);
}
resultMonitor.add(monitorFinished);