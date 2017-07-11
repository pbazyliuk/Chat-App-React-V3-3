// Libs

import React from 'react';

import styles from './Register.scss';

class Register extends React.Component {
	render() {
		return (
			<div className={ styles['form__wrapper'] } >
				<form action='' className={ styles['form-sign-up'] } >
					<h3 className={ styles['form-sign-up__header'] } >Sign Up</h3>

					<div className={ styles['form-sign-up__container'] } >
						<div className={ styles['form-sign-up__container--narrow'] } >
							<label
								className={ styles['form-sign-in__label'] } 
								htmlFor='firstnameId'
								id='firstnameLabel'>
								Firstname
							</label>
							<input
								id='firstnameId'
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
							<input
								id='lastnameId'
								className={ styles['form-sign-up__input-field'] } 
								name='lastname'
								type='text'
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
						<input
							id='emailId'
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
							<input
								id='passwordId'
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
							<input
								id='confirmpasswordId'
								className={ styles['form-sign-up__input-field'] } 
								type='password'
								name='passwordConfirm'
								placeholder='Confirm Password (required)'
							/>
						</div>
					</div>
					
					<button type='submit' className={ styles['form-sign-up__btn-register'] } >
					Get Started
					</button>
				</form>
			</div>
		);
	}
}

export default Register;
