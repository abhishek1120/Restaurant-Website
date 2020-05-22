import { DISHES } from '../shared/Dishes';
import { LEADERS } from '../shared/Leaders';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS
};

//to produce a new state we will create a reducer function which will recieve the current state and the action to produce the new state & this is a pure function it will return a immutable state that means it does'nt affect the current or the previous state it just gives the new state without changing the previous state

export const Reducer = (state = initialState,action) => {
    return state;
}