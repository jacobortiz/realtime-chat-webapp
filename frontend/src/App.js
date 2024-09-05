import React, {Component} from 'react'
import './App.css'
import {connect, sendMessage} from './api'

class App extends Component {
  constructor(props) {
    super(props)
    connect()
  }

  send() {
    sendMessage('hello')
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App
