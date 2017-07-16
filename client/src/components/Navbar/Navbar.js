// Libs

import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import styles from './Navbar.scss';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const isProtected = this.props.state.applicationState.uiState.authenticated || false;
		return (
			<nav className={styles['navbar']}>
				<div className={styles['navbar__logo-container']}>
					<Link to="/" className={styles['navbar__logo-link']}>
						<img src="../../../images/logo.png" alt="logo" />
					</Link>
				</div>

				<ul className={styles['navbar__menu']}>
					<li className={styles['navbar__menu-item']}>
						<Link to="/" className={styles['navbar__menu-link']}>
							Home
						</Link>
					</li>
					<li className={styles['navbar__menu-item']}>
						<Link to="/chat" className={styles['navbar__menu-link']}>
							Chat
						</Link>
					</li>

					<li
						className={
							isProtected === true
								? `${styles['navbar__menu-item']} ${styles['hidden']}`
								: `${styles['navbar__menu-item']} ${styles['isShown']}`
						}
					>
						<Link to="/auth/login" className={styles['navbar__menu-link']}>
							Login
						</Link>
					</li>

					<li
						className={
							isProtected === true
								? `${styles['navbar__menu-item']} ${styles['hidden']}`
								: `${styles['navbar__menu-item']} ${styles['isShown']}`
						}
					>
						<Link
							to="/auth/register"
							className={`${styles['navbar__menu-link']}`}
						>
							Register
						</Link>
					</li>

					<li
						className={
							isProtected === true
								? `${styles['navbar__menu-item']} ${styles['isShown']}`
								: `${styles['navbar__menu-item']} ${styles['hidden']}`
						}
					>
						<Link
							to="/auth/logout"
							className={`${styles['navbar__menu-link']}`}
						>
							Logout
						</Link>
					</li>

					{/*
						, styles['active'] 
					<li className={ styles['navbar__menu-item'] } >
						<a href='' className={ styles['navbar__logo-link'] } >Profile</a>
					</li>

					<li className={ styles['navbar__menu-item'] } >
						<a href='' className={ styles['navbar__logo-link'] } >Logout</a>
					</li>
					*/}
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	state
});

export default connect(mapStateToProps)(Navbar);
