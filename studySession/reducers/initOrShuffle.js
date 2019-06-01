import {INIT_OR_SHUFFLE_DECKS, RED, YELLOW, GREEN, WHITE} from '../constants';

export default function(state, action) {
    if (action.type === INIT_OR_SHUFFLE_DECKS) {
        let unshuffled_deck = [...(state.deck || (state.cards || []).map(card => ({
            ...card,
            currentSide: 1,
            flipped: false,
            color: WHITE
        })))];
        let deck = [];
        while (unshuffled_deck.length > 0) {
            let card = unshuffled_deck.splice(Math.floor(Math.random() * unshuffled_deck.length), 1)[0];
            deck.push(card);
        }
        let activeColor = state.activeColor !== undefined ? state.activeColor : WHITE;
        let activeCard = state.activeCard;
        if (activeCard === undefined) {
            [activeCard, deck, activeColor] = selectActiveCard(deck, activeColor);
        }
        return {...state, deck, activeCard, activeColor}
    }
    else return state;
}

function selectActiveCard(deck, activeColor) {
    let activeDeck = deck.filter(card => card.color === activeColor);
    let activeCard;
    while (activeDeck.length <= 0 && activeColor !== undefined) {
        activeColor = newActiveColor(deck);
        activeDeck = deck.filter(card => card.color === activeColor);
    }
    if (activeDeck.length > 0) {
        activeCard = activeDeck[0];
        deck = deck.filter(card => card !== activeCard);
    }
    return [activeCard, deck, activeColor];
}

function newActiveColor(deck) {
    if (deck.length >0 ) {
        return deck.map(card => card.color).sort()[0];
    } else {
        return undefined;
    }
}