import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './ChatsItem.scss'

class ChatsItem extends React.Component {
  render () {
    const { id, name, createdAt } = this.props.chat
    return (
      <Link to={`/chat/${id}`}>
        <li className={styles ['chat-list__item']} >
          <div className={styles ['avatar']} >
            <img className={styles ['avatar__img']} src='http://placehold.it/60x60' alt='avatar-image' />
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