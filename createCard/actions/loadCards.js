import {LOAD_CARDS} from '../constants';

export default function(cards) {
    return {
        type: LOAD_CARDS,
        cards
    }
}