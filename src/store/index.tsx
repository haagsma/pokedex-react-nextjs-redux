import {combineReducers, createStore} from 'redux';
import pokemonList from '../reduce/index';
import searchTextReducer from '../reduce/searchTextReducer';

const reducer = combineReducers({
    pokemonList,
    searchTextReducer
})

const store = createStore(reducer);

export default store;