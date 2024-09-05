import React, {Component} from 'react'
import './App.css'
import {connect, sendMessage} from './api'

// components
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'
import ChatInput from './components/ChatInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chat_history: [],
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log('New Message')
      this.setState((prev) => ({
        chat_history: [...this.state.chat_history, msg],
      }))
      console.log(this.state)
    })
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMessage(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <ChatHistory chat_history={this.state.chat_history} />
        <ChatInput send={this.send} />
      </div>
    )
  }
}

export default App
