import React from 'react';
import { connect } from 'react-redux';

function CantidadPokemon({ gameShop }) {
  return (
    <>
      Unidades: {gameShop.pokemon}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    gameShop: state.gameShop
  }
}

export default connect(mapStateToProps)(CantidadPokemon);