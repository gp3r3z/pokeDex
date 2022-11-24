
import { appState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { Pop } from "../Utils/Pop.js"



const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})



class PokemonsService {
    async getPokemons() {

        try {
            const res = await pokeAPI.get()
            // console.log('%cLOG: ', 'color:green;', res.data.results)

            appState.pokemonsAPI = res.data.results
            // console.log('%cLOG: ', 'color:yellow;', 'API Update', appState.pokemonsAPI)

        } catch (error) {
            Pop.error(error.message)
            // console.error(error)
        }
    }
    async getActivePoke(pokemon) {
        // console.log('%cLOG: ', 'color:yellow;', 'Setting active ')
        try {
            const res = await pokeAPI.get(pokemon)
            // NOTE don't map single objects. Not cause it's bad, cause it wont work
            appState.activePokemon = new PokeApiPokemon(res.data)

        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }

    }
    async capturePokemon(name) {

        const capturedPokemon = appState.pokemonsAPI.find(pokemon => pokemon.name == name)
        // console.log('%cLOG: ', 'color:yellow;', capturedPokemon)



    }
}


export const pokemonsService = new PokemonsService()