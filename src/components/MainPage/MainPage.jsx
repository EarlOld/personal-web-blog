import React, { Component } from 'react'
import LeftCollum from '../LeftCollum'
import RightCollum from '../RightCollum'
import './MainPage.styl'


class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div height={window.innerHeight} className='MainPage'>
        <LeftCollum />
        <RightCollum />
      </div>
    )
  }
}

export default MainPage
