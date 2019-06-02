import createCard from './createCard';
import switchToCreate from './switchToCreate';
import loadCards from './loadCards';

export default function createCardComposite(state, action) {
    state = createCard(state, action);
    state = switchToCreate(state, action);
    state = loadCards(state, action);
    
    return state;
};