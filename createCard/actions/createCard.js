import {CREATE_NEW_CARD} from '../constants';
export default function createCard(side1, side2) {
    return {
        type: CREATE_NEW_CARD,
        card: {
            side1, side2
        }
    };
}