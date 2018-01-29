import React, { Component } from 'react'
// import Header from '../Header'
import LeftCollum from '../LeftCollum'
import RightCollum from '../RightCollum'
import './MainPage.styl'
import './bootstrap.css'


class MainPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.MainPage = window.innerHeight
  }

  render() {
    return (
      <div ref={node => this.MainPage = node} className='MainPage'>
        <LeftCollum />
        <RightCollum />
      </div>
    )
  }
}

export default MainPage
