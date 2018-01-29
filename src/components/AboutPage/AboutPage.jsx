import React, { Component } from 'react'
import './AboutPage.styl'


class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    console.log(this.props);
    return (
      <div className='AboutPage'>
        AboutPage
      </div>
    )
  }
}

export default AboutPage
