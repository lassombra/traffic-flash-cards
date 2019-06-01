import switchToStudySession from './switchToStudySession';

export default function(state, action) {
    state = switchToStudySession(state, action);

    return state;
}