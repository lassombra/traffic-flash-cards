import switchToCreate from './switchToCreate';
import switchToStudySession from './switchToStudySession';

export default function createCardComposite(state, action) {
    state = switchToCreate(state, action);
    state = switchToStudySession(state, action);
    
    return state;
};