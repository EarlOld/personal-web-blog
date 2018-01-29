import React, { Component } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'
import './Slider.styl'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }
  componentDidMount() {
    this.setState({
      height: window.innerHeight
    })
  }

  render() {
    const { height } = this.state

    return (
      <div className='Slider'>
        <Carousel
          className='carousel-fade'
          controls={false}
          interval={3000}
          indicators={false}
        >
          <Carousel.Item>
            <div>
              <img style={{ height }} src='./img/1.jpg' />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img style={{ height }} src='./img/2.jpg' />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img style={{ height }} src='./img/3.jpg' />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Slider
