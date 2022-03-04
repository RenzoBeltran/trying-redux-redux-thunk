import React from 'react';
import { useSelector } from 'react-redux';

function ResultadoPokemon(props) {
  const response = useSelector((state) => {
    return state.buscador
  })
  return (
    <div className="mt-3">
      <h3 className="text-white">Resultados: </h3>
      {response.loading && <div className="text-warning">Buscando...</div>}

      {
        (!response.loading && response.pokemon.length >= 1) && <div className="text-success"><img src="" alt="" />
          <img src={response.pokemon[0].sprites.front_default} alt="pokemon" />
          <span>{response.pokemon[0]?.name}</span>
        </div>
      }
      {(!response.loading && response.error) && <span className="text-danger">{response.error}</span>}
    </div >
  );
}

export default ResultadoPokemon;