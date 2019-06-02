import {MOVE} from '../constants';

export default function(color) {
    return {type: MOVE, color};
}