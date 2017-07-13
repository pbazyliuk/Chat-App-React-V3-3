import React from 'react'
import { Link } from 'react-router-dom'

import styles from './MessagesNavbar.scss'

class MessagesNavbar extends React.Component {
  render () {
    return (
      <div className={ styles['chat-details-navbar']} >
        <div className={ styles['logo']} >
          <Link to='/' className={ styles['logo__link']} >
            <img className={ styles['logo__item']} src='../../../images/logo-small.png' alt='logo' />
          </Link>
        </div>

        <form action='' className={ styles['search-form']} >
          <input className={ styles['search-form__input']} type='text' placeholder='Search message' name='search-message'
          />
          <span className={ styles['search-form__btn-search']} />
        </form>
      </div>
    )
  }
}

export default MessagesNavbar