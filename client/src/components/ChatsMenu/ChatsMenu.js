import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form';
import styles from './ChatsMenu.scss'

function validate(values) {
	
	const errors = {};

	if(!values.chatName) {
		errors.chatName = 'Chatname is required'
	} else if (values.chatName.length > 15) {
    errors.chatName = 'Must be 15 characters or less'
  } else if (values.chatName.length < 4) {
    errors.chatName = 'Must be at least 4 characters'
  }
  
	if(!values.users) {
		errors.users = 'Users is required'
	}

	return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning  },
	className,
	placeholder
}) => {

return <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className={className} />
      {touched &&
        ((error &&
          <div className='text-has-error'>
            {error}
          </div>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>
}

const renderFieldSelect = ({
  input,
  meta: { touched, error, warning  },
  className,
  name,
  dataUsers,
  dataCurUser
}) => {
  dataUsers = dataUsers.filter(user => user.firstname !== dataCurUser.get('firstname'))
  let usersHtml = dataUsers.map((user) => {
    return <option key={user._id} value={user._id}>
              {user.firstname}
           </option>
  })
  return (
    <div>    
      <div>
        <select {...input} className={className} size={'5'} name={name} multiple>
         {usersHtml}
        </select>
        {touched &&
          ((error &&
            <div className='text-has-error'>
              {error}
            </div>) ||
            (warning &&
              <span>
                {warning}
              </span>))}
      </div>
    </div>
  )
}

class ChatsMenu extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render () {
    const { handleSubmit, valid, pristine, users, curUser } = this.props;
    console.error('')
    const isVisible = {
      display: 'none'
    }
    return (
      <div className='user-menu' style={!this.props.data.isMenuShown ? isVisible : {}}>

        <div className='user-menu__item' >
          <input type='checkbox' id='btn-settings' />
          <label htmlFor='btn-settings' className='btn-arrow-label-sm' >
            Add Chat
            <span className='btn-arrow-sm' />
          </label>
          <div className='user-menu__item-info' >
            <form className='form-add-chat' action='' onSubmit={handleSubmit}>
              <div className='form-add-chat__container'>
                <label className='form-add-chat__label' htmlFor='emailId'>Chat Name</label>
                <Field 
                  className='form-add-chat__input-field' 
                  type='text' 
                  name='chatName' 
                  id='emailId'
                  component={renderField} 
                  placeholder='Chat Name (required)'
                />
              </div>

              <div className='form-add-chat__container'>
                
                <label htmlFor='usersId' className='form-add-chat__label'>Select Users</label>
                    <Field 
                      className='form-add-chat__select-field'
                      name='users' 
                      component={renderFieldSelect} 
                      dataUsers={users}
                      dataCurUser={curUser}
                      id='usersId' 
                      value={curUser}
                      />
                </div>

                <button type='submit' disabled={ !valid } className='form-add-chat__btn-submit' >ADD CHAT</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

ChatsMenu.propTypes = {
  data: PropTypes.object.isRequired,
  isMenuShown: PropTypes.bool
}

ChatsMenu = reduxForm({
	form: 'addChat',
	validate
})(ChatsMenu)

ChatsMenu = connect(
	state => ({
		users: [...state.users],
		curUser: state.auth.get('user')
	}) // pull initial values from account reducer
)(ChatsMenu);

export default ChatsMenu
