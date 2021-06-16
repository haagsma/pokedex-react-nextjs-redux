import { NameUrl } from "../reduce";

const refreshPokemonList = (pokemonList: NameUrl[]) => {
    return {
        type: 'POKEMON_LIST',
        pokemonList
    }
}

export const loadPokemonNames = (namesList: NameUrl[]) => {
    return {
        type: 'NAMES_LIST',
        namesList
    }
}

export default refreshPokemonList;