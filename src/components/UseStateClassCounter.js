import React, { Component } from 'react'

export class UseStateClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        // this.setState({count:this.state.count+1})
        this.setState(prevState=>{
        return{
        count:prevState.count+1
        }
        })
    }
    
    render() {
        return (
            <div>
    <button onClick={this.incrementCount}>Class Count {this.state.count}</button>
            </div>
        )
    }
}

export default UseStateClassCounter
