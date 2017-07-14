import React from 'react';

import styles from './MessagesInput.scss';

class MessagesInput extends React.Component {
	render() {
		return (
			<div className={styles['message-input-container']}>
				<input
					className={styles['message-input']}
					placeholder="Input your message"
				/>
				<button className={styles['message-btn-submit']}>Send</button>
			</div>
		);
	}
}

export default MessagesInput;
