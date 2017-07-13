import React from 'react'
import Message from '../Message/Message'

import MESSAGES from '../../data/messages.js'
import PropTypes from 'prop-types'

import styles from './MessagesList.scss'

class MessagesList extends React.Component {
  render () {
    return (
      <div>
        {/* <div>ID: {this.props.id}</div> */}
        <ul className={styles['message-list']} >{MESSAGES.map((message) => {
          if (message.chatId === (+this.props.id)) {
            return (
              <Message key={message.id} message={message} />
            )
          }
        })}
        </ul>
      </div>
    )
  }
}

MessagesList.propTypes = {
  id: PropTypes.string.isRequired
}

export default MessagesList