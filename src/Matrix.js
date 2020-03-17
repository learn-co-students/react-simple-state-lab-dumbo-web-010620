import React, { Component } from 'react';
import Cell from './Cell.jsx'

export default class Matrix extends Component {

  // so I randomly put the default stuff in state cuz IDK wtf I'm doing sweet
  // so we're at the level of conscious incompetence!
  // level 2!!!! great. 
  // I am aware that I don't get this yet. That's not so bad. 
  // Remember: 
  // unconscious incompetence => conscious incompetence => 
  // conscious competence => unconscious competence

  // state = {
  //   values: [
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  //   ]
  // }
  
  genRow = (vals) => {
    // console.log(vals) // => one array
    vals.map(val => <Cell value={val}/>) 
    //    WRONG: vals.map(val => <Cell color={val}/>)
    //    SOLUTION: vals.map(val => <Cell value={val} />)

  }
  
  genMatrix = () => {
    // console.log(this)
    // console.log(this.props.values) // => array of 10 arrays
    this.props.values.map(rowVals =>  <div className="row">{this.genRow(rowVals)}</div>) 
    // this line is GOOD!
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

// Matrix.defaultProps = {
//   values: [
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
//       ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
//     ]
// }


Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}

// this looks overly complicated, thanks solution writers!
// I think this is essentially just making the value of the key "values" be the return value
// of this function, which is just the entire array
// so we could just copy the whole array in and keep that as the key value pairs, I think I like that more.


