import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"

import { setHTML } from '../Utils/Writer.js'


function _drawPokemonList() {
    let pokemons = appState.pokemonsAPI
    console.log('%cLOG: ', 'color:green;', ' Drawing pokemons ', pokemons)

    let template = ''
    pokemons.forEach(pokemon => template += PokeApiPokemon.ListTemplate(pokemon))

    setHTML('poke-options', template)


}

function _drawActivePokemon() {
    const pokemon = appState.activePokemon

    console.log('%cLOG: ', 'color:green;', 'Active Triggered .. drawing ', pokemon)
    // NOTE determines if there is an active pokemon to draw or not
    if (pokemon) {
        setHTML('pokemon-selected', pokemon.ActivePokemonTemplate)
    } else {
        setHTML('pokemon-selected', PokeApiPokemon.PlaceholderTemplate())
    }
}



export class PokemonsController {
    constructor() {
        console.log('%cLOG: ', 'color:green;', 'Pokemon Controller connected')
        appState.on('pokemonsAPI', _drawPokemonList)
        appState.on('activePokemon', _drawActivePokemon)

        this.getPokemons()
    }
    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }

    }
    async getActivePoke(pokemon) {
        console.log('%cLOG: ', 'color:green;', 'Getting active ', pokemon)
        try {
            await pokemonsService.getActivePoke(pokemon)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async capturePokemon(name) {
        try {

            console.log('%cLOG: ', 'color:green;', 'Capturing pokemon', name)

            await pokemonsService.capturePokemon(name)

            console.log('%cLOG: ', 'color:green;', 'loading ...',)
        } catch (error) {

        }
    }

}