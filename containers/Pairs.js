import React from 'react'
import { connect } from 'react-redux'
import MenuCard from '../components/MenuCard'

let Pairs = ({ menusById }) => (
  <ul style={{padding: '0'}}>
    {menusById.map(menu =>
      <MenuCard
        key={menu.id}
        menu={menu}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return { menusById: state.menusById }
}

Pairs = connect(mapStateToProps)(Pairs)

export default Pairs

