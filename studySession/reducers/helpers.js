export function selectActiveCard(deck, activeColor, changeColor = true) {
    let activeDeck = deck.filter(card => card.color === activeColor);
    let activeCard;
    while (activeDeck.length <= 0 && activeColor !== undefined && changeColor) {
        activeColor = newActiveColor(deck);
        activeDeck = deck.filter(card => card.color === activeColor);
    }
    if (activeDeck.length > 0) {
        activeCard = activeDeck[0];
        deck = deck.filter(card => card !== activeCard);
    }
    return [activeCard, deck, activeColor];
}

export function newActiveColor(deck) {
    if (deck.length >0 ) {
        return deck.map(card => card.color).sort()[0];
    } else {
        return undefined;
    }
}