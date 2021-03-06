import './Post.styl'
import { connect } from 'react-redux'
import { posts as postActions } from '../../redux/actions'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.addPost('sadasdasdasd')

  }

  render() {
    return (
      <div className='Post text'>
        <div className='title Post-title'>
          Проводник
        </div>
        <div className='Post-details'>
          <span className='Post-details-elem'>
            <i className='fa fa-user' />
            <a href='#' title='Posts by author' rel='author'>
              author
            </a>
          </span>
          <span className='Post-details-elem'>
            <i className='fa fa-clock-o' />
            <a href='#' title='Date' >
              Date
            </a>
          </span>
          <span className='Post-details-elem'>
            <i className='fa fa-comments-o' />
            <a href='#'>
              0 Comments
            </a>
          </span>
        </div>
        <div className='text Post-text'>
          <p>Он так отчаянно силился вспомнить, как ступил на тропу безоборотного саморазрушения, напрочь исключающего любые смягчающие обстоятельства...
            Возможно это был всего один шаг, возможно это было длительное шествие, лишь кажущееся, ему самому мгновением...</p>
          <p>Радары все оглохли, маяки все ослепли, все и каждое движение было парализовано, так что не поступало, ровным счетом и намека на сигнал бедствия...
            Никто не видел и не слышал никто...</p>
          <p>
            От того и руки не было кому подать, так и оказался один на один с горькими мыслями, ноющей болью, идя одною всего тропой - потерянный, понесший наказание за то, над чем не властен...
            Знал ли он, что попал в собственную ловушку, умело выставленную своим же разумом?
          </p>
          <p>
            Было достаточно одной единственной искры, чтоб разгорелся кострище из тлеющих иллюзий и непригодных принципов....
          </p>
          <p>Агония сродни подобной способна длиться целую вечность, а вечность - это слишком долго...</p>
          <p>Агония сродни подобной способна длиться целую вечность, а вечность - это слишком долго...</p>
          <p>Но он был жив, и в глубине живого точно знал, как отчаянно нуждался в проводнике...</p>
          <p>И он был соткан для него из нитей веры, готовности нести ответ держа любой удар!</p>

          <p>Не закрывай же глаза свои, идущий, твой проводник уже с тобой, преодолевает обратный путь!</p>
          <p>Путь тропою безоборотных саморазрушений, где ты не будешь нынче одинок!!!</p>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  addPost: PropTypes.func
}
//
// const mapStateToProps = state => ({
//
// });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPost: postActions.addPost
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(Post)
