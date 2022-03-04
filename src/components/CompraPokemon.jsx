import React from 'react';
import { buyPokemonAction, returnPokemonAction } from '../redux/actions/gameShopAction';
import { connect } from 'react-redux';

function CompraPokemon({ buyPokemonAction, returnPokemonAction }) {
  return (
    <div>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => { buyPokemonAction(1) }}>Comprar pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => { returnPokemonAction(1) }}> Regresar pokemon</button>
    </div >
  );
}

const mapDispatchToProps = {
  buyPokemonAction,
  returnPokemonAction
}

export default connect(null, mapDispatchToProps)(CompraPokemon);