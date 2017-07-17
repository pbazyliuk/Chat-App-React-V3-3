import React from 'react'
import PropTypes from 'prop-types'

import { Field, reduxForm } from 'redux-form';
import styles from '../../../style.scss'

function validate(values) {
	
	const errors = {};

	if(!values.chatName) {
		errors.chatName = 'Chatname is required'
	} else if (values.chatName.length > 30) {
    errors.chatName = 'Must be 30 characters or less'
  } else if (values.chatName.length < 6) {
    errors.chatName = 'Must be at least 6 characters'
  }

  // if(!values.users) {
	// 	errors.users = 'users is required'
	// }


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
  select,
  meta: { touched, error, warning  },
  className,
  name
}) => {
  let users = ['Tom', 'Sam', 'Donald', 'Ola', 'Mike'];
  let usersHtml = users.map((user) => {
    return <option key={user} >
              {user}
           </option>
  })
  return (
    <div>    
      <div>
        <select {...select} className={className} size={'5'} name={name} multiple>
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
    const { handleSubmit, valid, pristine } = this.props;
    // console.error(valid)
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
            <form className='form-add-chat' action=''>
              <div className='form-add-chat__container'>
                <label className='form-add-chat__label' htmlFor='emailId'>Chat Name</label>
                <Field 
                  className='form-add-chat__input-field' 
                  type='text' 
                  name='chatName' 
                  id='emailId'
                  component={renderField} 
                  placeholder='Chat Name (required)'
                  pattern='.{4,}'
                />
                {/* <div class='text-has-error'>
                    Chatname is required (min 4 characters)
                </div> */}
              </div>

              <div className='form-add-chat__container'>
                
                <label htmlFor='selectUsersId' className='form-add-chat__label'>Select Users</label>
                    <Field 
                      className='form-add-chat__select-field'
                      name='users' 
                      component={renderFieldSelect} 
                     
                      id='usersIds' 
                      />
                      {/* <option>Ivan</option>
                      <option>Sam</option>
                      <option>Donald</option> */}
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

export default ChatsMenu
