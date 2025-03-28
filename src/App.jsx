import useFetchCharacters from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  //generamos las variables renopmbrando lo importado para cada una de las peticiones y llevarnoslas al return
  const { data: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rick, loading: loadingRick, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <>
      <div className="container">
    <h2>Personaje Pokémon</h2>
    {loadingPokemon && <p className="loading">Cargando...</p>}
    {errorPokemon && <p className="error">Error: {errorPokemon.message}</p>}
    {pokemon && (
      <div className="character">
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      </div>
    )}

    <h2>Personaje Rick and Morty</h2>
    {loadingRick && <p className="loading">Cargando...</p>}
    {errorRick && <p className="error">Error: {errorRick.message}</p>}
    {rick && (
      <div className="character">
        <p>{rick.name}</p>
        <img src={rick.image} alt={rick.name} />
      </div>
    )}
  </div>
    </>
  );
}

export default App;
