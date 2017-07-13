import React from 'react'
import ChatsNavbar from '../ChatsNavbar/ChatsNavbar'
import ChatsList from '../ChatsList/ChatsList'
import ChatsDetails from '../ChatsDetails/ChatsDetails'
import ChatsMenu from '../ChatsMenu/ChatsMenu'

import styles from './Chats.scss';

class Chats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: false, isMenuShown: false}
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleMenuShow = this.handleMenuShow.bind(this)
  }

  handleSizeChange () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  handleMenuShow () {
    this.setState(prevState => ({
      isMenuShown: !prevState.isMenuShown
    }))
  }

  render () {
    const collapseWidth = {
      width: '108px',
      overflow: 'hidden'
    }

    const expandWidth = {
      width: 'calc(100% - 108px)'
    }
    return (
      <div className={styles['wrapper']}>
        <aside className={styles['aside-part']} style={this.state.isToggleOn ? collapseWidth : {}}>
          <ChatsNavbar onSizeChange={this.handleSizeChange} onMenuShow={this.handleMenuShow} data={this.state} />
          <ChatsMenu data={this.state} />
          <ChatsList data={this.state} />
        </aside>
        <div className={styles['main-part']} style={this.state.isToggleOn ? expandWidth : {}}>
          <ChatsDetails />
        </div>
      </div>
    )
  }
}

export default Chats