import React from 'react'

import ChatsDetailsNavbar from '../ChatsDetailsNavbar/ChatsDetailsNavbar'
import MessagesList from '../MessagesList/MessagesList'
import MessagesInput from '../MessagesInput/MessagesInput'
import ChatsHolder from '../ChatsHolder/ChatsHolder'

import { Route } from 'react-router-dom'

class ChatsDetails extends React.Component {
  constructor(props) {
    super(props)

  }
  render () {
    console.error(this.props)
    return (
      <div>
        <Route exact path='/chat' component={ChatsHolder} />
        <Route path='/chat/:id' component={ChatsDetailsNavbar}
        />
      </div>
    )
  }
}

export default ChatsDetails