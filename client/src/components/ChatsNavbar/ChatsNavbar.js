import React from 'react'
import PropTypes from 'prop-types'

import styles from './ChatsNavbar.scss'

class ChatsNavbar extends React.Component {
  constructor (props) {
    super(props)

    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleMenuShow = this.handleMenuShow.bind(this)
  }

  handleSizeChange () {
    this.props.onSizeChange()
  }

  handleMenuShow () {
    this.props.onMenuShow()
  }

  render () {

    const isVisible = {
      display: 'none'
    }

    const rotated = {
      transform: 'rotate(-90deg)',
      justifyContent: 'center'
    }

    const centered = {
      justifyContent: 'center'
    }

    const disabled = {
      pointerEvents: 'none',
    }

    return (
      <div className={ styles['chat-navbar'] } style={this.props.data.isToggleOn ? centered : {}}>
        <span onClick={this.handleSizeChange} className={ styles['chat-navbar__btn-left-arrow']} style={(!this.props.data.isMenuShown) ? ((this.props.data.isToggleOn) ? rotated : {}) : disabled} />

        <form action='' className={ styles['search-form']} style={this.props.data.isToggleOn ? isVisible : {}}>
          <input className={ styles['search-form__input']} type='text' placeholder='Search User/Chat' name='search-field' />
          <span className={ styles['search-form__btn-search']} />
        </form>

        <div style={this.props.data.isToggleOn ? isVisible : {}}>
          <span onClick={this.handleMenuShow} className={ styles['chat-navbar__btn-bars']} style={this.props.data.isMenuShown ? isVisible : {}} />
          <span onClick={this.handleMenuShow} className={ styles['chat-navbar__btn-close']} style={!this.props.data.isMenuShown ? isVisible : {}} />
        </div>
      </div>
    )
  }
}

ChatsNavbar.propTypes = {
  data: PropTypes.object.isRequired,
  isMenuShown: PropTypes.bool,
  isToggleOn: PropTypes.bool,
  onSizeChange: PropTypes.func.isRequired,
  onMenuShow: PropTypes.func.isRequired
}

export default ChatsNavbar