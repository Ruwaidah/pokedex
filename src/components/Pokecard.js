import "./Pokecard.css";

const Pokecard = (props) => {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`;
  return (
    <div className="Pokecard">
      <h4>{props.pokemon.name}</h4>
      <img src={image} alt={props.pokemon.name} />
      <p>Type: {props.pokemon.type}</p>
      <p>EXP: {props.pokemon.base_experience}</p>
    </div>
  );
};

export default Pokecard;
