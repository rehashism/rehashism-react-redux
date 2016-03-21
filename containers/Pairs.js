import React from 'react'
import { connect } from 'react-redux'
import MenuCard from '../components/MenuCard'
import { discardCard } from '../actions'

let Pairs = ({ pairs, menusById, onMenuClick }) => (
  <ul style={{padding: '0'}}>
    {pairs.map(item =>
      <MenuCard
        key={item}
        menu={menusById[item]}
        onClick={() => onMenuClick(item)}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    pairs: state.pairs,
    menusById: state.menusById
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (id) => {
      console.log(id)
      dispatch(discardCard(id))
    }
  }
}

Pairs = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Pairs)

export default Pairs

