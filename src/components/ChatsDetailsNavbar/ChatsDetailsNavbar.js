import React from 'react'
import { Link } from 'react-router-dom'

class ChatsDetailsNavbar extends React.Component {
  render () {
    return (
      <div className='chat-details-navbar'>
        <div className='logo'>
          <Link to='/' className='logo__link'>
            <img className='logo__item' src='http://placehold.it/120x45' alt='logo' />
          </Link>
        </div>

        <form action='' className='search-form'>
          <input className='search-form__input' type='text' placeholder='Search message' name='search-message'
          />
          <span className='search-form__btn-search' />
        </form>
      </div>
    )
  }
}

export default ChatsDetailsNavbar