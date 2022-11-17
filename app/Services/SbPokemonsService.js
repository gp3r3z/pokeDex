
import { appState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js"
import { Pop } from "../Utils/Pop.js"

const sandboxAPI = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/gil/pokemon'
})


class SbPokemonsService {
    async capturePokemon(name) {

        console.log('%cLOG: ', 'color:yellow;', 'Sending captured pokemon to PC ...beep..boop.beep', name)
        let capturedPokemon = appState.activePokemon

        console.log('%cLOG: ', 'color:yellow;', 'loading in research found on pokemon ', capturedPokemon)

        console.log('%cLOG: ', 'color:yellow;', capturedPokemon.img)


        try {
            const res = await sandboxAPI.post('', capturedPokemon)
            console.log('%cLOG: ', 'color:yellow;', res.data)
        } catch (error) { Pop.error(error.message) }

    }
    async getmyPokemon() {
        try {
            const res = await sandboxAPI.get()
            console.log('%cLOG: ', 'color:yellow;', 'Getting myPokemon', res.data)

            // appState.mypokemons = res.data.map(p => new PokeApiPokemon(p))
            appState.mypokemons = res.data

            console.log('%cLOG: ', 'color:yellow;', 'maping ', appState.mypokemons)



        } catch (error) { Pop.error(error.message) }
    }
}


export const sbPokemonsService = new SbPokemonsService()