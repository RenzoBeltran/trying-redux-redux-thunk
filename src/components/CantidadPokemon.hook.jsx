import React from 'react';
import { useSelector } from 'react-redux';

function CantidadPokemonHook(props) {
  const pokemonQuantity = useSelector((state) => state.gameShop.pokemon)
  return (
    <>
      Unidades: {pokemonQuantity}
    </>
  );
}

export default CantidadPokemonHook;