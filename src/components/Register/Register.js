// Libs

import React from 'react';

import { Field, reduxForm } from 'redux-form';

import styles from './Register.scss';

const validate = (values) => {
	const errors = {};

	if(!values.firstname) {

		errors.firstname = 'Firstname is required'
	} else if (values.firstname.length < 3) {
    errors.firstname = 'Must be at least 3 characters'
  } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be less than 15 characters'
  }

	if(!values.lastname) {
		errors.lastname = 'Lastname is required'
	} else if (values.firstname.length < 3) {
    errors.lastname = 'Must be at least 3 characters'
  } else if (values.firstname.length > 15) {
    errors.lastname = 'Must be less than 15 characters'
  }

	if(!values.email) {
		errors.email = 'Email is required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }	else if (values.email.length > 30) {
    errors.email = 'Must be 30 characters or less'
  }

	if(!values.password) {
		errors.password = 'Password is required'
	} else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters'
  }

	if(!values.passwordConfirm) {
		errors.passwordConfirm = 'Password is required'
	} 	else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match'
  }
	
		else if (values.passwordConfirm.length < 6) {
    errors.passwordConfirm = 'Must be at least 6 characters'
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
          <div className={styles['text-has-error']}>
            {error}
          </div>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>
}

let Register = props =>  {

		const { handleSubmit, valid, pristine } = props;

		return (
			<div className={ styles['form__wrapper'] } >
				<form action='' className={ styles['form-sign-up'] } onSubmit={ handleSubmit }>
					<h3 className={ styles['form-sign-up__header'] } >Sign Up</h3>

					<div className={ styles['form-sign-up__container'] } >
						<div className={ styles['form-sign-up__container--narrow'] } >
							<label
								className={ styles['form-sign-in__label'] } 
								htmlFor='firstnameId'
								id='firstnameLabel'>
								Firstname
							</label>
							<Field
								id='firstnameId'
								component={renderField} 
								className={ styles['form-sign-up__input-field'] } 
								type='text'
								name='firstname'
								placeholder='First Name (required)'
							/>
						</div>

						<div className={ styles['form-sign-up__container--narrow'] } >
							<label
								className={ styles['form-sign-in__label'] } 
								htmlFor='lastnameId'
								id='lastnameLabel'
							>
							Lastname
							</label>
							<Field
								id='lastnameId'
								component={renderField} 
								className={ styles['form-sign-up__input-field'] } 
								name='lastname'
								type='text'
								component={renderField} 
								placeholder='Last Name (required)'
							/>
						</div>
					</div>

					<div className={ styles['form-sign-up__container'] } >
						<label
							className={ styles['form-sign-in__label'] } 
							htmlFor='emailId'
							id='emailLabel'
						>
						Email
						</label>
						<Field
							id='emailId'
							component={renderField} 
							className={ styles['form-sign-up__input-field'] } 
							type='text'
							name='email'
							placeholder='Email Address (required)'
						/>
					</div>

					<div>
						<div className={ styles['form-sign-up__container'] } >
							<label
								className={ styles['form-sign-in__label' ] }
								htmlFor='passwordId'
								id='passwordLabel'
							>
							Password
							</label>
							<Field
								id='passwordId'
								component={renderField} 
								className={ styles['form-sign-up__input-field'] } 
								type='password'
								name='password'
								placeholder='Password (required)'
							/>
						</div>

						<div className={ styles['form-sign-up__container'] } >
							<label
								className={ styles['form-sign-in__label'] }
								htmlFor='confirmpasswordId'
								id='passwordConfirmLabel'
							>
							Confirm Password
							</label>
							<Field
								component={renderField} 
								id='confirmpasswordId'
								className={ styles['form-sign-up__input-field'] } 
								type='password'
								name='passwordConfirm'
								placeholder='Confirm Password (required)'
							/>
						</div>
					</div>
					
					<button type='submit' disabled={ !valid } className={ styles['form-sign-up__btn-register'] } >
					Get Started
					</button>
				</form>
			</div>
		);
}

Register = reduxForm({
	form: 'register',
	validate
})(Register)

export default Register;
