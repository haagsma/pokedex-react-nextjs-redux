import { NameUrl } from '../reduce'
import refreshPokemonList, { loadPokemonNames } from './index'

describe('create actions', () => {

    test('create action POKEMON_LIST', () => {
        const nameUrl: NameUrl[] = [{name: 'bulbasaur', url: 'http://'}];
    
        expect(refreshPokemonList(nameUrl)).toEqual({
            "pokemonList": nameUrl,
            "type": "POKEMON_LIST"
        })
    })

    test('create action NAMES_LIST', () => {
        const nameUrl: NameUrl[] = [{name: 'bulbasaur', url: 'http://'}];

        expect(loadPokemonNames(nameUrl)).toEqual({
            "namesList": nameUrl,
            "type": "NAMES_LIST"
        })
    })

})