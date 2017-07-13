import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './ChatsItem.scss'

class ChatsItem extends React.Component {
  render () {
    const { id, name, createdAt } = this.props.chat
    return (
      <Link  to={`/chat/${id}`}className={styles ['chat-list__link']}>
        <li className={styles ['chat-list__item']} >
          <div className={styles ['avatar']} >
            <img className={styles ['avatar__img']} src='../../../images/user-off-avatar.png' alt='avatar-image' />
          </div>
          <div className={styles ['chat-info']} >
            <h4 className={styles ['chat-name__heading']} >{name}</h4>
          </div>
          <div className={styles ['chat-last-activity']} >
            {createdAt}
          </div>
        </li>
      </Link>
    )
  }
}

ChatsItem.propTypes = {
  chat: PropTypes.object.isRequired
}

export default ChatsItem