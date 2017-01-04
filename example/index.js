import React, { Component } from 'react'
import { render } from 'react-dom'
import Example from './Example'

class App extends Component {
  render () {
    return (
      <Example />
    )
  }
}

render((
  <App />
), document.getElementById('root'))
