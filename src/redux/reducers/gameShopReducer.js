import { BUY_POKEMON, RETURN_POKEMON } from '../actions/gameShopAction';

const defaultGameShop = {
  pokemon: 0
}

const gameShop = (state = defaultGameShop, action) => {
  switch (action.type) {
    case BUY_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon - action.payload
      }
    }

    case RETURN_POKEMON: {
      return {
        ...state,
        pokemon: state.pokemon + action.payload
      }
    }

    default: return state
  }
}

export default gameShop;