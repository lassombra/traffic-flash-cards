import switchToStudySession from './switchToStudySession';
import initOrShuffle from './initOrShuffle';

export default function(state, action) {
    state = switchToStudySession(state, action);
    state = initOrShuffle(state, action);

    return state;
}