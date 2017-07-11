// Libs

import React from 'react';

import styles from './Login.scss';

class Login extends React.Component {

	render() {
		return (
			<div className={ styles['form__wrapper'] } >

				<form className={ styles['form-sign-in'] } >

					<h4 className={ styles['form-sign-in__header'] }>Login Form</h4>

					<div className={ styles['form-sign-in__container'] }>
						<label className={ styles['form-sign-in__label'] } htmlFor='emailId' >Email</label>
						<input className={ styles['form-sign-in__input-field'] } id='emailId' type='text' name='email' placeholder='Email Address (required)'
							required
							pattern='[^@]+@[^@]+\.[a-zA-Z]{2,}' />
						{ /*<div className={ styles['text-has-error'] }>
							Email is required and should be valid
						</div>*/}
					</div>

					<div className={ styles['form-sign-in__container'] }>
						<label className={ styles['form-sign-in__label'] } htmlFor='passwordId'>Password</label>
						<input className={ styles['form-sign-in__input-field'] } id='passwordId' type='password' name='password' placeholder='Password (required)'
							required pattern='.{6,}' />
						{ /*<div className={ styles['text-has-error'] }>
							Password is required (min 6 characters)
						</div> */ }
					</div>
					
					<button className={ styles['form-sign-in__btn-login'] } type='submit'>Sign In</button>
				</form>

			</div>
		)
	}
}

export default Login;
