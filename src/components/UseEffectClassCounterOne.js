import React,{ Component} from 'react'
export default class UseEffectClassCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            name:'' 
        }
    }
    componentDidMount(){
     document.title=`Clicked ${this.state.count} times`
     console.log("componentDidMount",this.state.count)
    }
    componentDidUpdate(prevprops,prevState){
        if(prevState.count != this.state.count){

        document.title=`Clicked ${this.state.count} times`
        console.log("this state count",this.state.count)
        console.log("prev State",prevState.count)
        console.log("componentDidUpdate",this.state.count)
    }
}
    render(){
        return(
            <div>
            <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}} />
            <button onClick={()=>this.setState({count:this.state.count+1})}>Click {this.state.count } times
            </button>
            </div>
        )
    }
}