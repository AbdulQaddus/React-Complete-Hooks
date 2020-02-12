import React,{Component} from 'react'

export default class IntervelClassCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        this.intervel=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        console.log('clear interval component Wil Unmount')
        clearInterval(this.interval)
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.count} </h1>
            </div>
        )
    }
}