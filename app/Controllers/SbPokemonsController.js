import { Pop } from "../Utils/Pop.js"
import { sbPokemonsService } from "../Services/SbPokemonsService.js"
import { appState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { setHTML } from "../Utils/Writer.js"



function _drawPokemonList() {
    let pokemons = appState.mypokemons
    console.log('%cLOG: ', 'color:green;', ' Drawing pokemons ! ', pokemons)

    let template = ''
    pokemons.forEach(pokemon => template += PokeApiPokemon.ListTemplate(pokemon))
    console.log('%cLOG: ', 'color:green;', template)
    setHTML('poke-options', template)


}
export class SbPokemonsController {
    constructor() {
        console.log('%cLOG: ', 'color:green;', 'Sandbox pokemon controller connected')

        appState.on('mypokemons', _drawPokemonList)
    }
    async capturePokemon(name) {
        console.log('Capturing pokemon')
        try {
            await sbPokemonsService.capturePokemon(name)
        } catch (error) { Pop.error(error.message) }
    }
    async getmyPokemon() {
        console.log('%cLOG: ', 'color:green;', 'Getting my captured pokemon')
        try {
            await sbPokemonsService.getmyPokemon()
        } catch (error) { Pop.error(error.message) }
    }
}
