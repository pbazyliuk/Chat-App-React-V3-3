// Libs

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './Login.scss';

function validate(values) {
	
	const errors = {};

	if(!values.email) {
		// const inputLength = 6
		// console.error(values.email);
		// errors.email = minLength(15)(values.email);
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }	else if (values.email.length > 30) {
    errors.email = 'Must be 30 characters or less'
  }

	if(!values.password) {
		errors.password = 'Required'
	} else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters'
  }

	return errors;
}

// const required = value => (value ? undefined : 'Required')
// const minLength = min => value =>{
// 	return value && value.length < min ? `Must be ${min} characters or more` : undefined
// }
  
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning  },
	className
}) => {
	
return <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
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
  

let Login = props =>  {
	const { handleSubmit, valid, pristine } = props;
	console.error(valid);

	return (
		<div className={ styles['form__wrapper'] } >

			<form className={ styles['form-sign-in'] } onSubmit={ handleSubmit }>

				<h4 className={ styles['form-sign-in__header'] }>Login Form</h4>

				<div className={ styles['form-sign-in__container'] }>
					<label className={ styles['form-sign-in__label'] } htmlFor='email' >Email</label>
					<Field 
						className={ styles['form-sign-in__input-field'] } 
						id='email' 
						component={renderField} 
						type='text' 
						name='email' 
						placeholder='Email Address (required)' 
						
					/>
			
					{ /*<div className={ styles['text-has-error'] }>
						Email is required and should be valid
					</div>*/}
				</div>

				<div className={ styles['form-sign-in__container'] }>
					<label className={ styles['form-sign-in__label'] } htmlFor='passwordId'>Password</label>
					<Field 
						className={ styles['form-sign-in__input-field'] } 
						id='passwordId' type='password' 
						component={renderField} 
						name='password'
						placeholder='Password (required)'
						required pattern='.{6,}' />
					{ /*<div className={ styles['text-has-error'] }>
						Password is required (min 6 characters)
					</div> */ }
				</div>
				
				<button className={ styles['form-sign-in__btn-login'] } disabled={ !valid } type='submit'>Sign In</button>
			</form>

		</div>
	)
}

Login = reduxForm({
	form: 'login',
	validate
})(Login)

export default Login;
