import { combineReducers } from 'redux'
import pairs from './pairs'
import menus from './menus'
import menuByIds from './menuByIds'

const menuApp = combineReducers({
  pairs,
  menus,
  menuByIds
})

export default menuApp
