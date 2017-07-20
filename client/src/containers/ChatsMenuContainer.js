import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions/index';

import ChatsMenu from '../components/ChatsMenu/ChatsMenu';

class ChatsMenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddChat = this.handleAddChat.bind(this);
    }

    handleAddChat(values) {
        console.log(values);
        let curUserId = JSON.parse(localStorage.getItem('user'))._id;
        if(!values.users.includes(curUserId)) return values.users.push(curUserId)
    }

    render() {
        return <ChatsMenu onSubmit={this.handleAddChat} {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    state
}

export default connect(mapStateToProps, actions)(ChatsMenuContainer);