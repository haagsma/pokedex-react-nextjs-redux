import React from 'react';

export class InitialData {
    pokemonList: {
        data: [],
        namesList: NameUrl[]
    }
}

export class NameUrl {
    name: string
    url: string
}

const pokemonList = (state = {data: [], namesList: []}, action) => {
    switch(action.type) {
        case 'POKEMON_LIST':
            return { ...state, data: action.pokemonList}
        case 'NAMES_LIST':
            return { ...state, namesList: action.namesList}
        default:
            return state;

    }
}

export default pokemonList;