import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value // something props/state
            // WRONG:  
            // color: this.props
        }
    }

    // FORGOT TO WRITE AS ARROW FXN!!!
    handleClick = () => {
        // let newColor = "#333"
        this.setState({
            color: "#333"
        })
    }

    render() {
        console.log("hello")
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.handleClick}> 
            </div> 
        )
    }
}


// WRONG:
// render() {
//     console.log("hello")
//     return (
//         <div 
//             className="cell" 
//             style={{backgroundColor:'#FFF'}} 
//             onClick="changeColor"> <Cell color="color"/> </div> 
//     )
// }