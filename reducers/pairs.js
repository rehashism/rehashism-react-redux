import { DISCARD_CARD } from '../actions/index'

const pairs = (state = [], action) => {
  switch (action.type) {
    case DISCARD_CARD:
      return [
        ...state.slice(0, action.menuId),
        ...state.slice(action.menuId + 1)
      ]
    default:
      return state
  }
}

export default pairs
