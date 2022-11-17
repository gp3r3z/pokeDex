import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SbPokemonsController } from "./Controllers/SBPokemonsController.js";


class App {

  pokemonsController = new PokemonsController()

  sbPokemonsController = new SbPokemonsController()

}

window["app"] = new App();
