


// NOTE layout complete.Need to add functionality
export class PokeApiPokemon {

  // NOTE items set in constructure with an object will be auto mapped other wise mapping directly within a view model with set the object iteself
  constructor(data) {
    this.name = data.name
    this.weight = data.weight
    this.types = data.types
    this.img = data.sprites.other.home.front_default
    this.height = data.height
  }
  static ListTemplate(pokemon) {
    return `<li onclick="app.pokemonsController.getActivePoke('${pokemon.name}')" class="text-start p-2 rounded pokemonline-style mt-2">
                 <span class="mdi mdi-pokeball fs-4 m-1"> ${pokemon.name}</span>
              </li > `
  }
  get ActivePokemonTemplate() {
    return `
         <h3 class="bg-danger p-3 text-center border border-dark border-3">
            <span
              class="border border-3 bg-light text-black border-secondary p-2"
            >
             ${this.name}
            </span>
          </h3>
          <img class="img-fluid" src="${this.img}" alt="" />
          <div class="bg-danger p-3 text-center border border-dark border-3">
             <span class="border border-3 bg-light text-black border-secondary p-2">
             Weight ${this.weight}
             Height: ${this.height}
             Type(s):   ${this.types[0].type.name}
              ${this.types[1] ? this.types[1].type.name : ''}
            </span>
            <button onclick="app.sbPokemonsController.capturePokemon('${this.name}')" class="btn btn-light text-center text-danger col-4 fs-4 mt-3">
              <span class="mdi mdi-pokeball"></span> Catch
            </button>
          </div>
        `
  }
  static PlaceholderTemplate() {
    return `<h3 class="text-center">Please select a spell from either list </h3>`
  }
  // NOTE used a workaround to utilize the template coming from the sb api provided
  //     static ListTemplate(pokemon) {
  //     return `<li onclick="app.pokemonsController.getActivePoke('${pokemon.name}')" class="text-start p-2 rounded pokemonline-style mt-2">
  //                  <span class="mdi mdi-pokeball fs-4 m-1"> ${pokemon.name}</span>
  //               </li > `
  //   }


}





