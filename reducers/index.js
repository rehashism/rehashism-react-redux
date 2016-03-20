import { combineReducers } from 'redux'
import pairs from './pairs'
import menus from './menus'
import menusById from './menusById'

const menuApp = combineReducers({
  pairs,
  menus,
  menusById
})

export default menuApp
