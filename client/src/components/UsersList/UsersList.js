import React from 'react'
import User from '../User/User'
import preload from '../../data/chats.json'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import styles from './UsersList.scss'

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render () {
    //
    const isVisible = {
      display: 'none'
    }

    const { users } = this.props;

    return (
      <ul className={styles ['chat-list']} style={this.props.data.isMenuShown ? isVisible : {}}>
        {users.map(function (user) {
          return (
            <User {...user} key={user._id} />
            
          )
        })}
      </ul>
    )
  }
}

// ChatsList.propTypes = {
//   data: PropTypes.object.isRequired,
//   isMenuShown: PropTypes.bool
// }

function mapStateToprops(state) {
  return {users: state.applicationState.storeData.users, authenticated: state.applicationState.uiState.authenticated }
}

export default connect(mapStateToprops, actions)(UsersList);