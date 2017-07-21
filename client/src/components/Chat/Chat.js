import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Chat.scss';

class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('CHAT911', this.props);
		const { _id, name, usersNames } = this.props;
		const usersNamesStr = usersNames.sort().join(', ');
		return (
			<Link to={`/chat/${name}`} className={styles['chat-list__link']}>
				<li className={styles['chat-list__item']}>
					<div className={styles['avatar']}>
						<img
							className={`${styles['avatar__img']} ${styles['show']}`}
							src="../../../images/chat-avatar.png"
							alt="avatar-image"
						/>
					</div>
					<div className={styles['chat-info']}>
						<h4 className={styles['chat-name__heading']}>
							{name}
						</h4>
						<div className={styles['chat-name__users']}>
							{usersNamesStr}
						</div>
					</div>
				</li>
			</Link>
		);
	}
}

export default Chat;
