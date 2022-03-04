import { combineReducers } from 'redux';
import gameShop from './gameShopReducer';
import buscador from './buscadorReducer';

const rootReducers = combineReducers({
  gameShop,
  buscador
})

export default rootReducers;