import {createStore} from 'redux';
import {Reducer,initalState, initialState} from './reducer';

export const ConfigureStore =  () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}