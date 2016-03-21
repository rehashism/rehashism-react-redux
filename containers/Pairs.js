import React from 'react'
import { connect } from 'react-redux'
import MenuCard from '../components/MenuCard'

let Pairs = ({ pairs, menusById }) => (
  <ul style={{padding: '0'}}>
    {pairs.map(item =>
      <MenuCard
        key={item}
        menu={menusById[item]}
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

Pairs = connect(mapStateToProps)(Pairs)

export default Pairs

