import {REMOVE_CARD} from '../constants';
export default function switchToDeckView(card) {
    return {type: REMOVE_CARD,card};
}