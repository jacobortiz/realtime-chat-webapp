import React, {Component} from 'react'
import './ChatHistory.scss'

import Message from '../Message'

class ChatHistory extends Component {
  render() {
    console.log(this.props.chat_history)
    const messages = this.props.chat_history.map((msg) => (
      <Message message={msg.data} />
    ))

    return (
      <div className='ChatHistory'>
        <h2>Chat History</h2>
        {messages}
      </div>
    )
  }
}

export default ChatHistory
