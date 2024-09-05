var socket = new WebSocket('ws://localhost:8080/ws')

let connect = (cb) => {
  console.log('connecting')

  socket.onopen = () => {
    console.log('Successfully Connected')
  }

  socket.onmessage = (msg) => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = (event) => {
    console.log('Socket Closed Connection: ', event)
  }

  socket.onerror = (error) => {
    console.log('Socket Error: ', error)
  }
}

let sendMessage = (msg) => {
  console.log('sending message: ', msg)
  socket.send(msg)
}

export {connect, sendMessage}
