import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

function BuscadorPokemon(props) {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');
  return (
    <div>
      <div className="form-group">
        <label htmlFor="buscar_pokemon" className="text-white"></label>
        <input type="text" className="form-control" id="buscar_pokemon" value={pokemonName}
          onChange={
            (e) => { setPokemonName(e.target.value) }
          } />
        <button className="btn btn-primary mt-3"
          onClick={() => { dispatch(fetchPokemon(pokemonName)) }}>Enviar</button>
      </div>
    </div >
  );
}

export default BuscadorPokemon;