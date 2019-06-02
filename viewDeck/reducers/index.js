import switchToDeckView from './switchToDeckView';
import removeCard from './removeCard';

export default function deckViewComposite(state, action) {
    state = switchToDeckView(state, action);
    state = removeCard(state, action);
    
    return state;
};