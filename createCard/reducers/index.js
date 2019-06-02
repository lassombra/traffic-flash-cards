import createCard from './createCard';
import loadCards from './loadCards';

export default function createCardComposite(state, action) {
    state = createCard(state, action);
    state = loadCards(state, action);
    
    return state;
};