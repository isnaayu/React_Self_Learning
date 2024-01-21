import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Self Learning"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Self Learning"
            })
        }, 3000)
    }
  render() {
    console.log("Parent Components render")
    return (
      <div>I am the parent Component
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp