import pokemon from "../pokemonData";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="Pokedex">
      {pokemon.map((poke) => (
        <Pokecard key={poke.id} pokemon={poke} />
      ))}
    </div>
  );
};

export default Pokedex;
