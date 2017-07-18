import React from 'react'
import { connect } from 'react-redux';
import Message from '../Message/Message'

import MESSAGES from '../../data/messages.js'
import PropTypes from 'prop-types';

import * as actions from '../../actions/index';

import styles from './MessagesList.scss'

class MessagesList extends React.Component {
  constructor(props) {
    super(props);

    this.messages = {}; 
  }

  componentWillMount() {
      this.props.getMessages();
  }


  render () {
    console.error('MESSAGES LIST', this.props);
    const { messages } = this.props;
    console.log(messages);
    return (
      <div>

        {/*<ul>
          {messages.map((message) => {
            return (<li>{message.userName}</li>)
          })}
        </ul>*/}
        {/* <div>ID: {this.props.id}</div> */}
        <ul className={styles['message-list']} >{messages.map((message) => {
          
            return (
              <Message message={message} />
            )
          
        })}
        </ul>
      </div>
    )
  }
}

// MessagesList.propTypes = {
//   id: PropTypes.string.isRequired
// }

const mapStateToProps = (state) => {
  return { messages: state.applicationState.storeData.messages};
}

export default connect(mapStateToProps, actions)(MessagesList);