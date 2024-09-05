import React, {Component} from 'react'
import './App.css'
import {connect, sendMessage} from './api'

import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'

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

  send() {
    sendMessage('hello')
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <ChatHistory chat_history={this.state.chat_history} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App
