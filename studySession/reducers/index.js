import initOrShuffle from './initOrShuffle';
import flip from './flip';
import move from './move';

export default function(state, action) {
    state = initOrShuffle(state, action);
    state = flip(state, action);
    state = move(state, action);

    return state;
}