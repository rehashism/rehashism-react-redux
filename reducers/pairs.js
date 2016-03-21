import { DISCARD_CARD } from '../actions'
const without = (arr, ...values) =>
  arr.filter(el => !values.some(exclude => el === exclude))

const pairs = (state = [], action) => {
  switch (action.type) {
    case DISCARD_CARD:
      return without(state, action.menuId)
    default:
      return state
  }
}

export default pairs
