import React, { Component } from 'react'
import Slider from '../Slider'
import LeftCollumContent from '../LeftCollumContent'

class LeftCollum extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='LeftCollum'>
        <Slider />
        <LeftCollumContent />
      </div>
    )
  }
}

export default LeftCollum
