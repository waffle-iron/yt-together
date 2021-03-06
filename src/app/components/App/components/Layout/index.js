import { Component } from 'react'
import { connect } from 'react-redux'

import Search from './components/Search'
import Player from './components/Player'
import Playlist from './components/Playlist'

const containerStyle = {
  display: 'flex',
  position: 'absolute',
  height: '100%',
  width: '100%',
  padding: '0 10px',
}

const style = {
  overflowY: 'auto',
  position: 'relative',
  overflowY: 'auto',
}

const playerItemStyle = Object.assign({
  flex: '0 0 content',
}, style)

const itemStyle = Object.assign({
  flex: 1,
  marginLeft: 10,
}, style)

const Layout = ({ showSearch }) => (
  <div style={containerStyle}>
    <div style={playerItemStyle}>
      <Player/>
    </div>
    <div style={itemStyle}>
      {
        showSearch ?
          <Search/> :
          <Playlist/>
      }
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    showSearch: state.showSearch
  }
}

const C = connect(
  mapStateToProps
)(Layout)

export default C
