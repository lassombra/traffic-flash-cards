import createCard from './createCard';
import switchToCreate from './switchToCreate';
export default function createCardComposite(state, action) {
    state = createCard(state, action);
    state = switchToCreate(state, action);
    return state;
};