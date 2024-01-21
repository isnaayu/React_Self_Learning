import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>Hello World, Iam {this.props.name} from {this.props.place}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps