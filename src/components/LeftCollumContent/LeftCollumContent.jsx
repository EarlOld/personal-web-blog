import React, { Component } from 'react'
import ShareIcons from '../ShareIcons'
import './LeftCollumContent.styl'

class LeftCollumContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='LeftCollumContent LeftCollumContent-content'>
        <div className='LeftCollumContent-title'>
          <i className='fa fa-bars' aria-hidden='true'/>
          <h1 className='title LeftCollumContent-title-text'>Writer</h1>
          <ShareIcons />
        </div>
        <h2 className='text LeftCollumContent-description'>Персональная авторская страница</h2>
      </div>
    )
  }
}

export default LeftCollumContent
