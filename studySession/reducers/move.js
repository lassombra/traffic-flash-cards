import {MOVE} from '../constants';
import {move} from './helpers';
import {deckViewState} from '../../viewDeck';

export default function(state, action) {
    if (action.type === MOVE && state.activeCard && state.activeCard.flipped && state.deck && state.activeColor !== undefined) {
        cardSelect = move(state.activeCard, state.deck, state.activeColor, action.color, state.cycled_deck);
        let switchView = {};
        if (cardSelect.deck.length == 0 && cardSelect.cycled_deck == 0 && !cardSelect.activeCard) {
            switchView = deckViewState();
        }
        return {...state, ...cardSelect, ...switchView};
    } else {
        return state;
    }
}