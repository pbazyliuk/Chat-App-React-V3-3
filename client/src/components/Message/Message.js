import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './Message.scss';

class Message extends React.Component {
	render() {
		const { text, sentAt, userName } = this.props.message;
		return (
			<li className={styles['user-message-author']}>
				<div className={styles['user-message-wrapper']}>
					<div className={styles['avatar']}>
						{/* <img class='avatar__img' src='../../../images/user-on-avatar.png' alt='avatar-image' /> */}
						<img
							className={styles['avatar__img']}
							src="../../../images/user-off-avatar.png"
							alt="avatar-image"
						/>
					</div>
					<div className={styles['user-message__text-cotainer']}>
						<span className={styles['user-message__text-author']}>{userName}</span>
						<div className={styles['user-message__text-message']}>
							{text}
						</div>
					</div>
				</div>

				<div className={styles['user-message__date-container']}>
					<span className={styles['user-message__date']}>
						{moment(sentAt).add(10, 'days').calendar()}
					</span>
					<br />
					<span className={styles['user-message__time']}>
						{moment(sentAt).format('h:mm a')}
					</span>
				</div>
			</li>
		);
	}
}

Message.propTypes = {
	message: PropTypes.object.isRequired
};

export default Message;
