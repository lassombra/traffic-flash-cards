import switchToDeckView from './switchToDeckView';
export default function deckViewComposite(state, action) {
    state = switchToDeckView(state, action);
    return state;
};