import React, { Component } from 'react'
import { render } from 'react-dom'
import Example from './Example'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      theme: {
        backgroundColor: '#181818',
        color: '#fafafa',
        highlight: '#9d1d20'
      }
    }
  }

  render () {
    return (
      <div>
        <Example theme={this.state.theme} />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
