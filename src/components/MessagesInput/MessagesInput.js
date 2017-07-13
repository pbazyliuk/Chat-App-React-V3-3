import React from 'react'

class MessageInput extends React.Component {
  render () {
    return (
      <div className='message-input' contentEditable='true' suppressContentEditableWarning>
        Type Something...
      </div>
    )
  }
}

export default MessageInput