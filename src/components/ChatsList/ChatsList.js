import React from 'react'
import ChatsItem from '../ChatsItem/ChatsItem'
import preload from '../../data/chats.json'
import PropTypes from 'prop-types'

import styles from './ChatsList.scss'

class ChatsList extends React.Component {
  render () {
    const isVisible = {
      display: 'none'
    }
    return (
      <ul className={styles ['chat-list']} style={this.props.data.isMenuShown ? isVisible : {}}>
        {preload.chats.map(function (chat) {
          return (
            <ChatsItem key={chat.id} chat={chat} />
          )
        })}
      </ul>
    )
  }
}

ChatsList.propTypes = {
  data: PropTypes.object.isRequired,
  isMenuShown: PropTypes.bool
}

export default ChatsList