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
        <a href='https://vk.com/id176957089' title='Вконтакте' target='_blank'><i className='fa fa-vk' aria-hidden='true'/></a>
        <a href='https://www.facebook.com/profile.php?id=100017192209209' title='Facebook' target='_blank'><i className='fa fa-facebook-square' aria-hidden='true'/></a>
        <a href='https://www.instagram.com/aleksandrazaitseva4910/' title='Instagram' target='_blank'><i className='fa fa-instagram' aria-hidden='true'/></a>
        <a href='http://www.stihi.ru/avtor/aleksandra85' title='Стихи.ру' target='_blank'><i className='fa fa-pencil-square-o' aria-hidden='true'/></a>

      </div>
    )
  }
}

export default ShareIcons
