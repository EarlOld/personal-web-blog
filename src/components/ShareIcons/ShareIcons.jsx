import React, { Component } from 'react'
import './ShareIcons.styl'


class ShareIcons extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='ShareIcons'>
        <a href='https://vk.com/id176957089'><i className='fa fa-vk' aria-hidden='true'/></a>
        <a href='https://www.facebook.com/profile.php?id=100017192209209'><i className='fa fa-facebook-square' aria-hidden='true'/></a>
        <a href='https://www.facebook.com/profile.php?id=100017192209209'><i className='fa fa-instagram' aria-hidden='true'/></a>

      </div>
    )
  }
}

export default ShareIcons
