// Libs

import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Navbar.scss';


class Navbar extends React.Component {
	render() {
		return (
			
			<nav className={styles['navbar']}>

				<div className={ styles['navbar__logo-container'] }>
					<Link to="/" className={ styles['navbar__logo-link'] } >
						<img src='../../../images/logo.png' alt='logo' />
					</Link>
				</div>

				<ul className={ styles['navbar__menu'] }>
					<li className={ styles['navbar__menu-item'] } >
						<Link to="/" className={ styles['navbar__menu-link'] }>Home</Link>
					</li>
					<li className={ styles['navbar__menu-item'] } >
						<Link to="/chat" className={ styles['navbar__menu-link'] }>Chat</Link>
					</li>

					<li className={ styles['navbar__menu-item'] } >
						<Link to="/auth/login" className={ styles['navbar__menu-link'] }>Login</Link>
					</li>
					
					<li className={ styles['navbar__menu-item'] } >
						<Link to="/auth/register" className={ `${styles['navbar__menu-link']}`  }>Register</Link>
					</li>
				
					{ /*
						, styles['active'] 
					<li className={ styles['navbar__menu-item'] } >
						<a href='' className={ styles['navbar__logo-link'] } >Profile</a>
					</li>

					<li className={ styles['navbar__menu-item'] } >
						<a href='' className={ styles['navbar__logo-link'] } >Logout</a>
					</li>
					*/
					}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
