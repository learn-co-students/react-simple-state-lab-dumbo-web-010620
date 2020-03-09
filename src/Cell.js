import React, { Component } from 'react'

export class Cell extends Component {
    constructor(props){
        super()
    
        this.state = {
            color: props.value
        
        }
    }
    render() {
        console.log()
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.setState({color: '#333'})}>
               {this.state.color}
            </div>
        )
    }
}

export default Cell
