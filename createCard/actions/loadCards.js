import {LOAD_CARDS} from '../constants';

export default function(cards, index) {
    return {
        type: LOAD_CARDS,
        cards,
        index
    }
}