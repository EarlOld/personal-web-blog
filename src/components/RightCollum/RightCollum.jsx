import React, { Component } from 'react'
import Post from '../Post'
import './RightCollum.styl'

class RightCollum extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='RightCollum content RightCollum-content'>
        <Post />
      </div>
    )
  }
}

export default RightCollum
