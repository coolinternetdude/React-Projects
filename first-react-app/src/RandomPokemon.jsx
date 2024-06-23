import "./RandomPokemon.css";
export default function RandomPokemon() {
  const pokenum = Math.round(Math.random() * 151);
  const pokeurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;
  return (
    <div className="RandomPokemon">
      <h3>Pokemon #{pokenum}</h3>
      <img src={pokeurl} alt="" />
    </div>
  );
}
