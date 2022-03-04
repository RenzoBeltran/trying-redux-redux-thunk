import React from 'react';
import { useDispatch } from 'react-redux';
import { buyPokemonAction, returnPokemonAction } from '../redux/actions/gameShopAction';

function CompraPokemonHook(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => { dispatch(buyPokemonAction(1)) }}>Comprar pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => { dispatch(returnPokemonAction(1)) }}> Regresar pokemon</button>
    </div >
  );
}

export default CompraPokemonHook;