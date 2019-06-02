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

export function move(activeCard, deck, activeColor, color) {
    deck = [...deck];
    let card = {...activeCard, flipped: false, currentSide: 1, color};
    deck.push(card);
    activeCard = undefined;
    [activeCard, deck, activeColor] = selectActiveCard(deck, activeColor, false);
    return {activeCard, deck};
}

export function shuffleAndSelect(deck, activeColor, activeCard) {
    let unshuffled_deck = [...deck];
    deck = [];
    while (unshuffled_deck.length > 0) {
        let card = unshuffled_deck.splice(Math.floor(Math.random() * unshuffled_deck.length), 1)[0];
        deck.push(card);
    }
    if (activeCard === undefined) {
        [activeCard, deck, activeColor] = selectActiveCard(deck, activeColor);
    }
    return {deck, activeCard, activeColor};
}